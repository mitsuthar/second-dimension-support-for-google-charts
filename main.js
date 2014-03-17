Array.prototype.getUnique = function(){
   var u = {}, a = [];
   for(var i = 0, l = this.length; i < l; ++i){
      if(u.hasOwnProperty(this[i])) {
         continue;
      }
      a.push(this[i]);
      u[this[i]] = 1;
   }
   return a;
}
function process_second_dimension(data)
{
	var new_data=[];
	var uniques=[];
	var categories=[];
	for(var i=1;i<data.length;i++)
	{
		categories.push(data[i][0]);
		uniques.push(data[i][1]);
	}
	categories=categories.getUnique();
	uniques=uniques.getUnique();
	var cols = data[0].length;
	var rows = data.length;
	var incrementor = uniques.length;
	var new_rows = categories.length;
	var first_row=[];
	first_row.push(data[0][0]);
	for(var i=2;i<cols;i++)
	{
		for(var j=0;j<incrementor;j++)
		{
			first_row.push(uniques[j]+" "+data[0][i]);
		}
	}
	new_data.push(first_row);
	console.log(new_data);
	var new_cols = first_row.length;
	for(var i=0;i<new_rows;i++)
	{
		var temp=[]
		for(var j=0;j<new_cols;j++)
		{
			if(j==0)
			{
				temp.push(categories[i]);
			}
			else
			{
				temp.push(0);	
			}
		}
		new_data.push(temp);
	}

	for(var i=1;i<data.length;i++)
	{
		var mod_row=categories.indexOf(data[i][0])+1;
		
		var mod_col = uniques.indexOf(data[i][1])+1;
		var temp=0;	
		for(var j=2;j<cols;j++)
		{
			new_data[mod_row][mod_col+temp]=data[i][j];
			temp=temp+incrementor;
		}
	}
	console.log(new_data);
	return new_data;
}
