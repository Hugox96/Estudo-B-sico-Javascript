const nuns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 

for(i in  nuns)
{
    if(i == 5)
    {
     break
    }
    console.log(i, nuns[i])
}

for(j in nuns)
{
    if(j == 5)
    {
        continue
    }
    console.log(j, nuns[j])
} 
