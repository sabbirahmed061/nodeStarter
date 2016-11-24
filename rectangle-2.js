/**
 * module used by solve 2
 */


module.exports=function(x,y,callback){
	try{
		if(x<0 || y<0){
			throw new Error("cannot be less than zero"+x+y);
		}
		else
			callback(null,{
				perimeter:function(){
					return (2*(x+y));
				},
				area:function(){
					return (x*y);
				}
			});
	}
	catch(error){
		callback(error,null);
	}
}