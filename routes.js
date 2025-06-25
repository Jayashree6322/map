const distances = [
    {
      start: "chennai",
      end: "villupuram",
      distance: 166,
    },
    {
      start: "villupuram",
      end: "trichy",
      distance: 165,
    },
    {
      start: "trichy",
      end: "madurai",
      distance: 138,
    },
    {
      start: "madurai",
      end: "thirunelvelli",
      distance: 171,
    },
    {
      start: "thirunelvelli",
      end: "kanyakumari",
      distance: 85,
    },
    {
      start: "trichy",
      end: "karur",
      distance: 83,
    },
  ];
  const routes = [
    {
      start: "chennai",
      end: "trichy",
      stops: ["chennai", "villupuram", "trichy"],
    },
    {
      start: "chennai",
      end: "karur",
      stops: ["chennai", "villupuram", "trichy", "karur"],
    },
    {
      start: "trichy",
      end: "thirunelvelli",
      stops: ["trichy", "madurai", "thirunelvelli"],
    },
  ];


  const getTotal = (stops) => {
    let total = 0;

    for(let i=0;i<stops.length-1;i++) {
      const start = stops[i];
      const end = stops[i+1];

      const found = distances.find((distance) => distance.start === start && distance.end === end);

      total+= found ? found.distance : 0;
    }

    return total;
  }; 
   
    
    const totalDistance = routes.map((route) => ({
    ...route,
    total:getTotal(route.stops)
  }));


 console.table(totalDistance);

 /*const getTotal = (stops) => stops.map((start,index,arr) =>
   (distances.find((distance) => 
    (distance.start === start && distance.end === arr[index+1])) || 0).distance || 0)
.reduce((start,end) => start+end,0);*/
 
 
 
 