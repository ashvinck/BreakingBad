
// Creating  HTML elements

///container div
const container = document.createElement('div'); 
 container.className = 'container-fluid';              
 document.body.appendChild(container);
  
//row div
 const row = document.createElement('div'); 
 row.className = 'row';                   
 container.appendChild(row); 

//Using fetch to retrieve data from API
  const breakingBadInfo  = async () => {
    let loader = `<div class="boxLoading">Loading...</div>`; 
    document.querySelector('.row').innerHTML = loader;

    try {
      //Here we use promise to fetch data from API and store it to a variable "data" from which we iterate over the array and return the required info from the API response.
        const response = await fetch('https://www.breakingbadapi.com/api/characters');
        //to see if API response is ok or not.
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);

        //  Page Heading 
        let result = `<h1>𝐁𝐫𝐞𝐚𝐤𝐢𝐧𝐠 𝐁𝐚𝐝</h1> 
                      <p> This page contains info about the characters in the tv Series 'Breaking Bad'.</p>`; 
        data.forEach((info) => {  
          const { name, img, occupation, portrayed, status, nickname  } = info;
          result += 
          // Creating remaining repeating HTML elements using Bootstrap
          `<div class="col-lg-4">
                <div class="col-sm-12">
                    <div class="card">
                        <img src="${img}" class="card-img-top" alt="News_thumbnail">
                        <div class="card-body">
                            <h2 class="header"> ${name} </h3>
                            <h4 class="card-text t1">Nickname: ${nickname}  </h4>
                            <h4 class="card-text t3">Occupation : ${occupation} </h4>
                            <h4 class="card-text t1">Status: ${status}  </h4> 
                            <h4 class="card-text t3">Portrayed by: ${portrayed} </h4>
                        </div>
                    </div>
                </div>
            </div>`;
            
            //Appending the above html elements to row div
              document.querySelector('.row').innerHTML = result; 
        });
    
    }
    //to catch error in fetch
    catch (error) {
      console.error(`Could not get news: ${error}`);
    }
  };
  
breakingBadInfo();  //calling the function to be executed.

  