function CountArray(arr, target) {
    let count = 0;

    try{
        for(let i=0; i < arr.length; i++){
            let sum =0;
            
            sum+=arr[i]
            for (let j=i+1; j < arr.length; j++)
            {
                if(typeof arr[j] !=='number')
                    return 'not a number'
                sum += arr[j]
                if(sum == target){
                    count++;
                }
            }
        }

        return count;
    }catch(e){
        console.log(e)
    }
   

    
}
const arr = [1, 2, 3, 4,5,1]
console.log(CountArray(arr, 6)); // Output: 2