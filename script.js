let rmd =Math.round( Math.random() * 25 );  

let count=4;
function check()
{
    count--;
    let num =document.getElementById('num')
    console.log(rmd);
    let nums=Number(num.value);
    if(num.value===rmd){
        alert('success')
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                count=4;
        rmd =Math.round( Math.random() * 25 );
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
        
    }else if(count===0)
    {
            alert('you lose')
    }else if(num>rmd)
    {
        alert('biger')
    }else{
        alert('small')
    }
}