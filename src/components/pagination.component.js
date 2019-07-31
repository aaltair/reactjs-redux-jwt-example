import React from "react"
import {Pagination,PaginationItem,PaginationLink} from "reactstrap"

class pagination extends React.Component {

constructor(props){
    super(props)
    this.state = {
        pageIndex : 1,
        pageSize : 10,
        totalRecord : 0,
        changeCallBack:null
    }


    this.goFirst =this.goFirst.bind(this);
    this.goPrevious=this.goPrevious.bind(this);
    this.goindex =this.goindex.bind(this);
    this.goNext =this.goNext.bind(this);
    this.goLast =this.goLast.bind(this);
    
}
componentDidMount(){
 const {pageIndex ,totalRecord,pageSize ,changeCallBack } =  this.props;
this.setState ({pageIndex ,totalRecord,pageSize,changeCallBack});
console.log(this.props)


}

getPage(numofPage)
{
    let list =[];
    for(let i =1 ; i<=numofPage ;i++)
    {
        list.push(i);
    }
    return list;
}

changePage(pagenumber){
    const {changeCallBack  } =  this.state;
    changeCallBack(pagenumber);
}

goFirst(){
this.changePage(1);
}

goPrevious(){
    const {pageIndex } =  this.state;    
    this.changePage(pageIndex-1);
}

goindex(e){

    this.changePage(parseInt(e.target.value));
    
}

goNext(){
    const {pageIndex } =  this.state;  
    this.changePage(pageIndex+1);
}
goLast(e){
    this.changePage(parseInt(e.target.value));
}


render(){
    const {pageIndex,totalRecord,pageSize  } =  this.state;
  
    const numofPage = parseInt( totalRecord / pageSize);
  
    return(   <div>
                {
                numofPage >0 &&
                <Pagination aria-label="Page navigation example">
                <PaginationItem>
                <PaginationLink first  disabled ={pageIndex===1} onClick={this.goFirst} />
              </PaginationItem>
             
             <PaginationItem>
                <PaginationLink previous  disabled ={pageIndex===1} onClick={this.goPrevious} />
              </PaginationItem>
            
            {this.getPage(numofPage).map((value,i)=>{
                    return ( <PaginationItem key={i} active={pageIndex===value}> 
                    <PaginationLink onClick={this.goindex} value={value}>
                        {value}
                    </PaginationLink>
                    </PaginationItem>)
            }) }
    
              <PaginationItem>
              <PaginationLink next  disabled ={pageIndex===numofPage} onClick={this.goNext}  />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink last  disabled ={pageIndex===numofPage} onClick={this.goLast} value={numofPage}  />
              </PaginationItem>
              </Pagination>
            
        }
         
       </div>
        
    );
}


}

export {pagination as Pagination}