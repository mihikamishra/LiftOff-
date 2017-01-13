
var Details=React.createClass({ 
 getInitialState:function()
 { return(nam:’’,value:’’”,begin[“”,””,””],end[“”,””,””]);},

 getName: function(val)
{ this.setState({name:val)};},

 getValue: function(val)
{ 
  if(val<100 && val>1)
    this.setState({value:val)};
 },

 setBeginDate: function(val,ind)
{ this.setState({begin[ind]:val)};},

 setEndDate: function(val,ind)
{ this.setState({end[ind]:val)};},

validateDate: function()
{
 if(begin[2]>end[2])
     return false;
 else return true;

if(begin[1]>end[1] && begin[2]==end[2])
     return false;
else return true;

if(begin[0]>end[0] && begin[2]==end[2] && begin[1]==end[1] )
     return false;
else return true;
},
render: function()
{
 return(<div>
    <span>Enter Name
    <input type="text" value={this.state.name} onChange={this.getName} />
    </span>
    
    <span>Enter Value
    <input type="text" value={this.state.value} onChange={this.getValue} />
    </span>
    
    <span>Enter Begin Date
    <input type="text" value={this.state.begin[0]} onChange={this.setBeginDate.bind(this,"0")} />
    <input type="text" value={this.state.begin[1]} onChange={this.setBeginDate.bind(this,"1")} />
    <input type="text" value={this.state.begin[2]} onChange={this.setBeginDate.bind(this,"2")} />
    </span>
    
     <span>Enter End Date
    <input type="text" value={this.state.end[0]} onChange={this.setEndDate.bind(this,"0")} />
    <input type="text" value={this.state.end[1]} onChange={this.setEndDate.bind(this,"1")} />
    <input type="text" value={this.state.end[2]} onChange={this.setEndDate.bind(this,"2")} />
    </span>
    
</div>);
}
)};
