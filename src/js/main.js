let addFloorBtn = document.getElementById("add-floor");
let addLiftBtn = document.getElementById("add-lift");

console.log("-----------------");
console.log(addFloorBtn);
console.log(addLiftBtn);

// Add floor logic
addFloorBtn.addEventListener("click", () => {
    console.log("add floor");
    let floor = document.createElement("section");
    floor.className = "floor";
    floor.innerHTML = `
          <hr>
          <div class="floor-main-part">
            <div class="floor-btn">
              <button class="floor-btn-up" onclick = "moveLiftUp(event)">Up</button>
              <button class="floor-btn-down" onclick = "moveLiftDown(event)">Down</button>
            </div>

            <!-- Lift section -->
            <div class="lifts"></div>

            <!-- Remove floor button -->
            <div class="remove-floor-btn">
              <button class="btn btn-remove-floor" onclick="removeFloor(event)">
                Remove Floor
              </button>
            </div>
          </div>`;
    document.getElementById("floors").prepend(floor);
});

// Remove floor logic
let removeFloorBtn = document.getElementsByClassName("btn-remove-floor");

const removeFloor = (e) => {
    // let floor = document.getElementsByClassName("floor");
    console.log("floor removed");
    e.target.parentElement.parentElement.parentElement.remove();
};

// Add lift logic
addLiftBtn.addEventListener("click", () => {
    console.log("add lift");
    let lift = document.createElement("div");
    lift.className = "lift";
    lift.innerHTML = `<p></p>
          `;
          let floors = document.getElementsByClassName("floor");
  let lastFloor = floors[floors.length - 1];
  lastFloor.getElementsByClassName("lifts")[0].appendChild(lift);

});

// Move lift up logic

let moveLiftUp = (e) => {
    console.log("move lift up");
    let lift = e.target.parentElement.parentElement.parentElement.getElementsByClassName("lift")[0];
    let floor = e.target.parentElement.parentElement.parentElement;
    let floors = document.getElementsByClassName("floor");
    let lastFloor = floors[floors.length - 1];
    let lastFloorLift = lastFloor.getElementsByClassName("lift")[0];
    if (floor === lastFloor) {
        lastFloorLift.remove();
        floor.getElementsByClassName("lifts")[0].appendChild(lift);
    } else {
        let nextFloor = floor.nextElementSibling;
        nextFloor.getElementsByClassName("lifts")[0].appendChild(lift);
    }
}

// Move lift down logic
let moveLiftDown = (e) => {
    console.log("move lift down");
    let lift = e.target.parentElement.parentElement.parentElement.getElementsByClassName("lift")[0];
    let floor = e.target.parentElement.parentElement.parentElement;
    let floors = document.getElementsByClassName("floor");
    let firstFloor = floors[0];
    let firstFloorLift = firstFloor.getElementsByClassName("lift")[0];
    if (floor === firstFloor) {
        firstFloorLift.remove();
        floor.getElementsByClassName("lifts")[0].appendChild(lift);
    } else {
        let prevFloor = floor.previousElementSibling;
        prevFloor.getElementsByClassName("lifts")[0].appendChild(lift);
    }
}