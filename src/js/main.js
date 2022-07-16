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
              <button class="floor-btn-up">Up</button>
              <button class="floor-btn-down">Down</button>
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
    lift.innerHTML = `<p>Lift</p>
          `;
          let floors = document.getElementsByClassName("floor");
  let lastFloor = floors[floors.length - 1];
  lastFloor.getElementsByClassName("lifts")[0].appendChild(lift);

});