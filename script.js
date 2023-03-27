// complete the given function

function palindrome(str){
    let start = 0;
	let end = str.length-1;
	while( start < end)
		{
			if(start === ' ')
			{
				start++;
			}
			if(end === ' ')
			{
				end--;
			}
			if (start !== end)
			{
				return false;
			}
			start ++;
			end --;
		}
	return true;
}
module.exports = palindrome
