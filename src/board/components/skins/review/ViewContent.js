import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FcDownload } from 'react-icons/fc';
import { SmallButton } from '../../../../commons/components/Buttons';

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  .subject {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .post-info {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: #666;
    margin-bottom: 20px;

    .left {
      display: flex;
      align-items: center;

      span {
        margin-left: 5px;
        color: #007bff;
      }
    }

    .right {
      text-align: right;
    }
  }

  .contents {
    img {
      max-width: 100%;
      height: auto;
      border-radius: 4px;
      margin-bottom: 20px;
    }
  }

  .downloads {
    list-style: none;
    padding: 0;
    margin: 20px 0;

    li {
      display: flex;
      align-items: center;
      margin-bottom: 10px;

      svg {
        margin-right: 10px;
      }

      a {
        text-decoration: none;
        color: #007bff;
        font-weight: 500;
        transition: color 0.3s ease;

        &:hover {
          color: #0056b3;
        }
      }
    }
  }

  a {
    display: inline-block;
    margin: 10px 15px;
    font-size: 16px;
    color: #007bff;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const ViewContent = ({ data, onDelete }) => {
  const { t } = useTranslation();
  const { board } = data;

  return (
    <Wrapper>
      <div className="subject">{data.subject}</div>
      <div className="post-info">
        <div className="left">
          {data.poster}
          {data.member && <span>({data.member.email})</span>}
        </div>
        <div className="right">
          IP. {data.ip} / {t('조회수')}. {data.viewCount.toLocaleString()} /
          {data.createdAt}
        </div>
      </div>
      <div
        className="contents"
        dangerouslySetInnerHTML={{ __html: data.content }}
      />
      {data?.attachFiles?.length > 0 && (
        <ul className="downloads">
          {data.attachFiles.map(({ fileDownloadUrl, fileName }) => (
            <li key={fileDownloadUrl}>
              <FcDownload />
              <a href={fileDownloadUrl}>{fileName}</a>
            </li>
          ))}
        </ul>
      )}
      {data.showList && (
        <Link to={'/board/list/' + board.bid}>{t('글목록')}</Link>
      )}
      {data.showEdit && (
        <>
          <Link to={'/board/write/' + board.bid}>{t('글쓰기')}</Link>
          <Link to={'/board/update/' + data.seq}>{t('글수정')}</Link>
        </>
      )}
      {data.showDelete && (
        <SmallButton type="button" onClick={() => onDelete(data.seq)}>
          {t('글삭제')}
        </SmallButton>
      )}
    </Wrapper>
  );
};

export default React.memo(ViewContent);