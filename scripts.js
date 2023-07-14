// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init(){
    
    const takeoffbutton = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    
    takeoffbutton.addEventListener('click', function(){
        window.confirm("Confirm that the shuttle is ready for takeoff.");
        flightStatus.innerHTML = "Shuttle in flight.";
        shuttleBackground.style.backgroundColor = "blue";
        spaceShuttleHeight.innerHTML =  10000;
    });

    const landbutton = document.getElementById("landing");
    landbutton.addEventListener('click', function(){
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML =  0;
    });

    const missionAbort = document.getElementById("missionAbort");
    missionAbort.addEventListener('click', function(){
        window.confirm("Confirm that you want to abort the mission?");
        flightStatus.innerHTML = "Mission aborted.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML =  0;
    });
        const img = document.getElementById("shuttleBackground");
        img.style.left="0px";  
        img.style.top="0px";  
        img.style.right="0px";  
        img.style.down="0px";  

    if(document.getElementById("up").innerHTML === 'Up')
    {
        document.getElementById("up").addEventListener('click', function(){
        img.style.top= (parseInt(img.style.top)-10)+"px";
        spaceShuttleHeight.innerHTML = (parseInt(spaceShuttleHeight.innerHTML) + 10000);
        
        });
    }
    if(document.getElementById("down").innerHTML === 'Down')
    {
        document.getElementById("down").addEventListener('click', function(){
        img.style.top= (parseInt(img.style.top)+10)+"px";
        spaceShuttleHeight.innerHTML = (parseInt(spaceShuttleHeight) - 10000);

        });
    }
    if(document.getElementById("left").innerHTML=== 'Left')
    {
        document.getElementById("left").addEventListener('click', function(){
        img.style.left= (parseInt(img.style.left)-10)+"px";

        });
    }
    if(document.getElementById("right").innerHTML === 'Right')
    {
        
        document.getElementById("right").addEventListener('click', function(){
        img.style.left= (parseInt(img.style.left)+10)+"px";
               
        });
    }
    

}
window.addEventListener("load", init);