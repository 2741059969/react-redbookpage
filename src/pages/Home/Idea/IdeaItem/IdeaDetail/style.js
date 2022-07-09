import styled from 'styled-components'
export const IdeaDetailWrapper = styled.div`
.idea-detail-header{
    padding-top: 0.1rem;
    display:flex;
    justify-content: space-between;
    .idea-detail-header-left,.idea-detail-header-right{
        display:flex;
        align-items: center;  
        .fa-angle-left{
            font-size: 1.5rem;
            margin: 0 1rem;
        }
        .userimg{
            width: 1.5rem;
            height: 1.5rem;
            border-radius: 50%;
            margin-right: 0.6rem;
            margin-top: 0.35rem;
        }
        .username{
            font-size:0.5rem;
            font-weight: 700;
        }
    }
    .idea-detail-header-right{
        .concern{
            color:red;
            font-weight:600;
            border: 1px solid red;
            text-align: center;
            width: 50px;
            height: 22px;
            border-radius:12px;
        }    
        .icon-zhuanfa{
            margin:0.5rem;
            font-size: 17px;
        }
        .fa-ellipsis-v{ 
            font-size: 1rem;
            margin: 0 1rem;
        }
    }   
}
.swiper-img{
    width: 100%;
}
.content{
    font-size: 0.7rem;
    margin: 1.5rem 0;
    padding: 0 1rem;
}

 
`