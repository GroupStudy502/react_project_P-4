import React from 'react';
<<<<<<< HEAD
import styled from 'styled-components';
import { MdFirstPage, MdLastPage, MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import classNames from 'classnames';


const Wrapper = styled.div`
    display:flex;
    max-width: 400px;
    margin: 10px auto; 
    align-items: center;

    .page {
        width: 0;
        height: 35px;
        line-height: 33px;
        flex-grow: 1;
        font-size: 1.15rem;
        border: 1px solid #000;
        border-radius: 3px;
        cursor: pointer;
    }
        .page + .page {
            margin-left: 3px;
        }

        .page.on {
            background: #000;
            
        }
`;

const Pagination  = ({pagination, onClick}) => {
    const { page, pages, prevRangePage, nextRangePage, totalPages } = pagination;
    
    return (
        pages.length > 0 && (
          <Wrapper>
            {prevRangePage > 0 && (
                <>
                <MdFirstPage onClick={() => onClick(1)} />
                <MdNavigateBefore onClick={() => onClick(Number(prevRangePage))}/>
                </>
            ) }
            {pages.map((p) => (
              <div key={'page' + p[0]} onClick={()=> onClick(Number(p[0]))} className={'page' + classNames({on: Number(p[0]) === page})}>
                {p[0]}
                </div>
            ))}
            {nextRangePage > 0 && (
                <>
                    <MdNavigateNext onClick={() => onClick(Number(nextRangePage))}
                    className='page'
                    />
                    <MdLastPage onClick={() => onClick(Number(totalPages))} 
                    className='page'
                    />
                </>
            )}
          </Wrapper>
        )
      );

=======

const Pagination = () => {
  return <h1>페이징...</h1>;
>>>>>>> master
};

export default React.memo(Pagination);