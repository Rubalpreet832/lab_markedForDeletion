
   const fs = require("fs"); 
  fs.readFile("marked.csv",{encoding:"utf-8"},(err,data)=>{
      let rows=data.split("\n");
     // console.log(rows);
     rows = rows.map((row) => row.split(","));
      
      //console.log(rows);
      //console.log(row);
      rows = rows.filter((row) =>row[2]==="no");
      console.log(rows)
      rows = rows.map((row)=>row.join(","));
      rows =rows.join("\n")
      console.log(rows);

      fs.writeFile("deleted.csv",rows,(err)=>{
          if (err)console.log(err);
        
      });
    });

