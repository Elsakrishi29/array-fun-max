function maximum(){
    let array=[45,86,78,100,690,30,860,75];
    let max=array[0];

    let len=array.length;
    console.log("Array Length: " +len);

    for(i=0;i<len;i++){
        if(array[i]>max){
            max=array[i];
        }
     }
        console.log(max);
}
maximum()
