var argv=require('yargs')
	.usage('Usage:node $0 --l=[num] --b[num]')
	.demand(['l','b'])
	.argv;

var rect=require('./rectangle-2');

function solveRect(l,b){
	console.log("solving for:"+l+" and "+b);
	
	rect(l,b, function(err,rectangle){
		if(err){
			console.log(err);
		}
		else{
			console.log("area is: "+rectangle.area());
			
			console.log("perimiter is: "+rectangle.perimeter());
			
		}
	});
}

solveRect(argv.l, argv.b);
/*solveRect(9,9);
solveRect(9,9);
solveRect(-9,-9);*/
