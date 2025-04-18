
document.getElementById("changeTextBtn").addEventListener("click", () => {
    const description = document.getElementById("description");
    description.textContent = "The text has been updated dynamically!";
    description.style.color = "tomato"; // Modify CSS style
    description.style.fontWeight = "bold";
  });
  
  
  document.getElementById("toggleBoxBtn").addEventListener("click", () => {
    const existingBox = document.getElementById("dynamicBox");
  
    if (existingBox) {
      existingBox.remove();
    } else {
      const box = document.createElement("div");
      box.id = "dynamicBox";
      box.textContent = "I am a dynamically added box!";
      box.style.padding = "10px";
      box.style.marginTop = "10px";
      box.style.backgroundColor = "lightgreen";
      document.body.appendChild(box);
    }
  });

  head=document.getElementById("unkown");
  head.style.color='violet';
  head.style.fontWeight='bold';

  document.getElementById("addElements").addEventListener("click",()=>{
    menu=document.getElementById("menu");
    const items = ["Yoghurt", "Milk", "Cabbage", "Meat"];

    items.forEach((item)=>{
        const list=document.createElement('li');
        list.textContent=item;

        menu.appendChild(list);

    });

  });
