import React,{Component} from 'react';

class ListItem extends Component{
    constructor(props){
        super(props);
       
    }

    render(){
        console.log(this.props.rowData);
        return(
            <div className="container" >
                <div className="row">
                    {/* {this.props.rowData?.items[0]?.text} */}
                   
                    {this.props.rowData?.items?.map((value, index) => {
                      return  (<> 
                      <div className="card bg-warning text-white item-list-card row">
                          <div className="card-body" key={index}>{value.text} 
                          <span> <i class="fa fa-trash trash-icon" aria-hidden="true"></i></span></div>                       
                       </div>
                          </>) 
                    })}
                    
                </div>
            </div>
        );
    }
}

export default ListItem;