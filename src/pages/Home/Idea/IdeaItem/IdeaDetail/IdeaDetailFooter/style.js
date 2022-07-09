import styled from 'styled-components'
export const Wrapper = styled.div`
.footer{
    width: 100%;
    height: 2.5rem;
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    margin-top:0.1rem;
    display: flex;
    border-top: 1px solid grey;
    padding: 0.1rem 0;  
    .icon-iconfront-{
        margin-right: 0.2rem;
    }
    .comment{      
        background-color: #f6f6f6;
        margin-top:0.3rem;
        margin-bottom:0.3rem ;
        font-size: 0.7rem;
        flex:1;
        padding-left: 1rem;
        height: 1.5rem;
        line-height: 1.5rem;
        border-radius:1rem; 
        margin-right: -0.5rem;
    }
    .font-items{
        display: flex;
    .font-item{
        margin-top: 0.5rem;
        padding: 0 0.75rem;
        display: flex;
        i{
            font-size: 1.2rem;
            height: 1rem;
            line-height: 1rem;
        }
        .active-red{
            color:red;
        }
        .font-number{
            margin-top: 0.1rem;
            margin-left:0.1rem;
            font-size: 0.1rem;
        }
    }   
    }
}
`