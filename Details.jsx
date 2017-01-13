
var Details=React.createClass({ 
 
 getInitialState:function()
 { 
    return(name:’’,value:’’,begin[“”,””,””],end[“”,””,””],display:false);
 },

 getName: function(val)
{ 
    this.setState({name:val)};
},

 getValue: function(val)
{ 
  if(val<100 && val>1)
    this.setState({value:val)};
 },

 setBeginDate: function(val,ind)
{ this.setState({begin[ind]:val)};},

 setEndDate: function(val,ind)
{  
    var dateOK=true;
    this.setState({end[ind]:val)};
    if(ind==2)
       dateOK=this.validate();
 },

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
 
 displayReport: function()
 { 
    this.setState({display:true});
 },
  
render: function()
{
 var disRep='';
 if(this.state.display)
    disRep=(<div>Name:{this.state.name}<br/>
   <div class="card">
  <div class="donut-chart chart1">
    <div class="slice one"></div>
    <div class="slice two"></div>
    <div class="chart-center">
      <span>{this.state.value}</span>
    </div>
  </div>
</div>
   <br/>
   Begin Date:{this.state.begin[0]}/{this.state.begin[1]}/{this.state.begin[2]}<br/>
   End date:{this.state.end[0]}/{this.state.end[1]}/{this.state.end[2]}
       </div>);
 
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
   
   <button onClick={this.displayReport}>Report</button>
   {disRep}
</div>);
}
)};
