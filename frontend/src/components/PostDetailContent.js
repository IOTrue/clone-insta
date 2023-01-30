import React, {useState, useEffect, useRef} from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';

import { COLORS } from '../style/styleGlobal';
import { BiTrash } from "react-icons/bi";
import { BsPencilFill } from "react-icons/bs";
import { HiOutlinePaperAirplane } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import ButtonDefault from '../components/ButtonDefault';
import { isGlobalModalPostDetailAction } from '../redux/modules/postDetailSlice';


function PostDetailContent({width, height, bgColor, hoverBgColor, hoverFontColor, onClick, children}) {

  const onClickPostDelete=()=>{ //글 삭제
    if(window.confirm('삭제하시겠습니까?')){
      alert('삭제완료!')
    }else{
      alert('삭제취소')
    }
  }


  return (
      <StPostDetailContent>
        <Link to="/main" title="피드 방문하기" className="linkPostDetailUserInfo inline-flex">
          <StPostDetailThumb></StPostDetailThumb>
        </Link>
        <StPostDetailUserCommentBox>
          <Link to="/main" title="피드 방문하기" className="linkPostDetailUserInfo inline-flex">
            <StPostDetailNick>닉네임닉네임</StPostDetailNick>
          </Link>
          <StMainPostItemDescContent>
              게시글 설명글 게시글 설명글 게시글 설명글 게시글 설명글 게시글 설명글 게시글 설명글 게시글 설명글 게시글 설명글 게시글 설명글 
          </StMainPostItemDescContent>
          <StMainPostItemDateBlock>2023-01-26</StMainPostItemDateBlock>
        </StPostDetailUserCommentBox>
        <BiTrash onClick={onClickPostDelete} className="position-right"/>
      </StPostDetailContent>
  )
}




const StPostDetailContent=styled.div`
  margin-top: 20px;
  display: flex;
  align-items: flex-start;
  position: relative;
`
const StMainPostItemDateBlock=styled.span`
  display: block;
  margin-top: 10px;
  color: #aaa;
`
const StMainPostItemDescContent=styled.p`
  display: inline;
  padding: 10px;
  margin-bottom: 6px;
  line-height: 21px;
`
const StPostDetailNick=styled.span`
  font-weight: bold;
`
const StPostDetailUserCommentBox=styled.div`
  margin-left: 10px;
  padding-right: 10px;
`
const StPostDetailThumb=styled.img`
  width: 30px;
  height:30px;
  border-radius: 30px;
  border: 1px solid ${COLORS.defaultGray};
`



export default PostDetailContent