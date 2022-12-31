function pickPeaks(arr){
  
    let obj = {    
      pos: [],
      peaks: [] 
    }

   for(let i = 1, j = i+1; i < arr.length-1 && j < arr.length; ) {
              
          // if left is less than middle
              if(arr[i-1] < arr[i]) {
                
                // if right is less than middle
                  if(arr[j] < arr[i]) {
                      obj.pos.push(i);
                      obj.peaks.push(arr[i]);
                      i++;
                      j = i+1;
                  } 
                // if right is equal to middle
                else if(arr[j] == arr[i]) {
                      j++;
                  } 
              // if above condition are false
                else {
                      i++;
                      j = i+1;
                  }
              } 
              // if arr[i-1] < arr[i] this condition fails then
              else {
                  i++;
                  j = i+1;
              }
     
          }
  
      return obj; 
  }

  console.log(pickPeaks([1,2,5,4,3,2,3,6,4,1,2,3,3,4,5,3,2,1,2,3,5,5,4,3]))