import React, { useState, useEffect, useContext, useCallback } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import {
  ClassicEditor,
  Image,
  ImageInsert,
  Bold,
  Essentials,
  Italic,
  Paragraph,
} from 'ckeditor5';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import MessageBox from '../../../../commons/components/MessageBox';
import InputBox from '../../../../commons/components/InputBox';
import UserInfoContext from '../../../../member/modules/UserInfoContext';
import { FaCheckSquare, FaSquare } from 'react-icons/fa';
import { MidButton } from '../../../../commons/components/Buttons';
import FileUpload from '../../../../commons/components/FileUpload';
import FileItems from '../../../../commons/components/FileItems';
import ItemsBox from '../../../../restaurantfind/components/ItemsBox';

import 'ckeditor5/ckeditor5.css';

const Wrapper = styled.form`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  dl {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
  }

  dt {
    font-weight: bold;
    margin-bottom: 8px;
    color: #333;
  }

  dd {
    margin-bottom: 10px;
  }

  textarea {
    width: 100%;
    height: 200px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 10px;
    font-size: 16px;
    resize: vertical;
  }

  .ck-editor__editable {
    height: 300px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  label {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 16px;
    color: #007bff;
    margin-top: 10px;
  }

  label svg {
    margin-right: 8px;
  }

  .ck-toolbar {
    border-bottom: 1px solid #ddd;
  }
`;

const StyledInputBox = styled(InputBox)`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  font-size: 16px;
`;

const ErrorMessage = styled(MessageBox)`
  margin-top: 5px;
  font-size: 14px;
  color: #e74c3c;
`;

const SubmitButton = styled(MidButton)`
  margin-top: 20px;
`;

const Form = ({
  board,
  form,
  onSubmit,
  onToggleNotice,
  errors,
  fileUploadCallback,
  fileDeleteCallback,
  onChange,
}) => {
  const [mounted, setMounted] = useState(false);
  const [editor, setEditor] = useState(null);
  const { useEditor, useUploadImage, useUploadFile } = board;
  const { t } = useTranslation();
  const {
    states: { isLogin, isAdmin },
  } = useContext(UserInfoContext);

  useEffect(() => {
    setMounted(true);

    return () => {
      setMounted(false);
    };
  }, []);

  // 이미지 에디터 첨부
  const insertImageCallback = useCallback(
    (url) => {
      editor.execute('insertImage', { source: url });
    },
    [editor]
  );

  return (
    <Wrapper onSubmit={onSubmit} autoComplete="off">
      {form?.restaurant && <ItemsBox items={[form.restaurant]} />}   
      <dl>    
        <dt>{t('작성자')}</dt>
        <dd>
          <StyledInputBox
            type="text"
            name="poster"
            value={form?.poster}
            onChange={onChange}
          />
          {errors?.poster && (
            <ErrorMessage color="danger" messages={errors.poster} />
          )}
        </dd>
      </dl>
      {((form.mode === 'write' && !isLogin) ||
        (form.mode === 'update' && !form?.member)) && (
        <dl>
          <dt>{t('비밀번호')}</dt>
          <dd>
            <StyledInputBox
              type="password"
              name="guestPw"
              value={form?.guestPw}
              onChange={onChange}
            />
            {errors?.guestPw && (
              <ErrorMessage color="danger" messages={errors.guestPw} />
            )}
          </dd>
        </dl>
      )}
      {isAdmin && (
        <dl>
          <dt>{t('공지글')}</dt>
          <dd>
            <label onClick={onToggleNotice}>
              {form?.notice ? <FaCheckSquare /> : <FaSquare />}
              {t('공지글로_등록하기')}
            </label>
          </dd>
        </dl>
      )}
      <dl>
        <dt>{t('제목')}</dt>
        <dd>
          <StyledInputBox
            type="text"
            name="subject"
            value={form?.subject}
            onChange={onChange}
          />
          {errors?.subject && (
            <ErrorMessage color="danger" messages={errors.subject} />
          )}
        </dd>
      </dl>
      <dl>
        <dt>{t('내용')}</dt>
        <dd>
          {useEditor ? (
            mounted && (
              <>
                <CKEditor
                  editor={ClassicEditor}
                  config={{
                    plugins: [
                      Bold,
                      Essentials,
                      Italic,
                      Paragraph,
                      Image,
                      ImageInsert,
                    ],
                    toolbar: ['undo', 'redo', 'bold', 'italic'],
                  }}
                  data={form?.content}
                  onReady={(editor) => setEditor(editor)}
                  onChange={(_, editor) => {
                    onChange({
                      target: { name: 'content', value: editor.getData() },
                    });
                  }}
                />
                {editor && useUploadImage && (
                  <>
                    <FileUpload
                      gid={form.gid}
                      location="editor"
                      imageOnly
                      color="primary"
                      width="120"
                      callback={(files) => fileUploadCallback(files, editor)}
                    >
                      {t('이미지_업로드')}
                    </FileUpload>
                    <FileItems
                      files={form?.editorImages}
                      mode="editor"
                      insertImageCallback={insertImageCallback}
                      fileDeleteCallback={fileDeleteCallback}
                    />
                  </>
                )}
              </>
            )
          ) : (
            <textarea
              name="content"
              value={form?.content}
              onChange={onChange}
            ></textarea>
          )}
          {errors?.content && (
            <ErrorMessage color="danger" messages={errors.content} />
          )}
        </dd>
      </dl>
      {useUploadFile && (
        <dl>
          <dt>{t('파일첨부')}</dt>
          <dd>
            <FileUpload
              gid={form.gid}
              location="attach"
              width="120"
              color="primary"
              callback={fileUploadCallback}
            >
              {t('파일선택')}
            </FileUpload>
            <FileItems
              files={form?.attachFiles}
              mode="attach"
              fileDeleteCallback={fileDeleteCallback}
            />
          </dd>
        </dl>

        
      )}
      <SubmitButton type="submit" color="info">
        {t(form.mode === 'update' ? '수정하기' : '작성하기')}
      </SubmitButton>
    </Wrapper>
  );
};

export default React.memo(Form);