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
                    <div className="card bg-warning text-white">
                    {this.props.rowData?.items?.map((value, index) => {
                      return  <li className="card-body" key={index}>{value.text}</li>
                      
                      
                    })}
                    </div>
                </div>
            </div>
        );
    }
}

export default ListItem;