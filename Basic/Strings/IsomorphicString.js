/*
Given two strings s and t, determine if they are isomorphic. Two strings s and t are isomorphic if the characters 
in s can be replaced to get t.
All occurrences of a character must be replaced with another character while preserving the order of characters. 
No two characters may map to the same character, but a character may map to itself.
Input : s = "egg" , t = "add" Output : true
Explanation : The 'e' in string s can be replaced with 'a' of string t.
Input : s = "paper" , t = "title" Output : true
Input : s = "apple" , t = "bbnbm" Output : false
Constraints:
1 <= s.length <= 10**3
s.length == t.length
s and t consist of only lowercase English letters.
*/
/*optimal : solution included and directly added comments basically we have to check both index by index ,also both are
equal lengths so no need to handle separetley. now at each index s[i] and t[i] should have their last seen values at
same index , if both are seen first time then there index will be 0 thats fine , if there last seen are different
then one of them or both of them are already seen before and mapped with different indexes ,so we cannot map these two
so we can return false.
*/

function isomorphicString(s, t) {
        //solved after watching editorial 
        //was thinking in terms of storing frequencies but that would not work out for mul reasons ,the 
        // main being we have to also see the pattern, xxy nad zyz both have freq [1,2] but pattern is diff 
    
        let arr1= new Array(256).fill(0),arr2=new Array(256).fill(0);
        //here its only lowercase chars so size of 26 with storing chars
        //index 0 to 26 of array by storing ascii minus -97('a' ascii value)(97-122)->(0-26)
       //would have been sufficient but if lets do it for all chars for generic qn .

        let n=s.length
        for(let i=0;i<n;i++){
            //last seen positions of respective characters should be same 
            //they will be same if not already mapped or if already mapped to each other.
            //mapping here means we are doing it by storing their last seen positon (same position)
            // then it means these both are mapping , as later when see both of them they both will
            //point to where we previously seen them together.
            if(arr1[s.charCodeAt(i)] !== arr2[t.charCodeAt(i)]){ return false};

            //update the last seen positions.
            arr1[s.charCodeAt(i)] =i+1 ;// we can do i here but we are storing in i+1 because if we 
            //had any char with code 0 and also since 0 in our array also used to indicate not seen at there will be mix update
            //although since our ascii for loweercase eng alphabets gonna be 97 to 122 no issue here but generic characters
            //will have a problem.
            arr2[t.charCodeAt(i)] =i+1;
        }
        return true;
    }
    let s="paper", t="title"; console.log(isomorphicString(s,t));
    let s1="abcdd",t1="ghijk"; console.log(isomorphicString(s1,t1));