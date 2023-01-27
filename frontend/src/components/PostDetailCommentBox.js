import React, {useState, useEffect, useRef} from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';

import { COLORS } from '../style/styleGlobal';

import { HiOutlinePaperAirplane } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";


import ButtonDefault from './ButtonDefault';


function PostDetailCommentBox() {


  const commentRef=useRef()
  const dispatch=useDispatch()

  const isGlobalModalPostDetail=useSelector((state)=>state.postDetailSlice.isGlobalModalPostDetail)


  const onSubmitPostCommnet=(e)=>{ //댓글 게시
    e.preventDefault()
    alert('댓글 게시!')
  }

  useEffect(()=>{ //모달 오픈시 댓글 입력 인풋 포커스
    isGlobalModalPostDetail && commentRef.current.focus()
  },[isGlobalModalPostDetail])

  return (
        <StPostDetailCommentBox>
          <StPostDetailCommentBoxTop>
            <StPostDetailCommentIconBox>
              <FaRegHeart/>
              <HiOutlinePaperAirplane/>
            </StPostDetailCommentIconBox>
            <StPostDetailCommentLikeTotal>좋아요 999개</StPostDetailCommentLikeTotal>
            <StMainPostItemDateBlock>2023-01-26</StMainPostItemDateBlock>
          </StPostDetailCommentBoxTop>
          <StPostDetailCommentInputBox onSubmit={onSubmitPostCommnet}>
            <StPostDetailCommentInput ref={commentRef} required />
            <ButtonDefault width="100px" bgColor={COLORS.defaultLemon} hoverBgColor={COLORS.defaultBold}>입력</ButtonDefault>
          </StPostDetailCommentInputBox>
        </StPostDetailCommentBox>
  )
}



const StPostDetailCommentInput=styled.input.attrs({
  type:`text`,
  placeholder:`댓글 달기...`,
})`
  width: calc(80% - 22px);
  border: none;
  padding: 14px 10px;
`
const StPostDetailCommentInputBox=styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-top: 10px;
  column-gap: 5px;
  padding: 5px;
`
const StMainPostItemDateBlock=styled.span`
  display: block;
  margin-top: 10px;
  color: #aaa;
  font-size: 14px;
`
const StPostDetailCommentLikeTotal=styled.span`
  display: inline-block;
  margin-top: 10px;
  font-weight: bold;
  font-size: 12px;
`
const StPostDetailCommentBoxTop=styled.div`
  border-bottom:1px solid #e2e2e2;
  padding: 10px;
`
const StPostDetailCommentIconBox=styled.div`
  display: flex;
  justify-content: flex-start;
  column-gap: 10px;
  
`
const StPostDetailCommentBox=styled.div`
  
`
export default PostDetailCommentBox