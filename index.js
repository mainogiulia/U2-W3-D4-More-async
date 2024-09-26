const pexelsUrl = "https://api.pexels.com/v1/search?query=";
const apiKey = "seXlPMqxKLkrIjO1M1WchPz7TDBlFM5tGsveiHD5jDt8QaJkk8VMTFEt";
const loadButton = document.getElementsByClassName("first-button");
const loadSecondaryButton = document.getElementsByClassName("second-button");

const displayImg = function (pictureArr) {
  pictureArr.forEach((picture) => {
    const column = document.createElement("div");
    column.classList.add("col-md-4");
    column.innerHTML = `
            <div class="card mb-4 shadow-sm">
              <img src=${picture.src.medium} class="bd-placeholder-img card-img-top" />
              <div class="card-body">
                <h5 class="card-title">Lorem Ipsum</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">
                      View
                    </button>
                    <button type="button" class="btn btn-sm btn-outline-secondary" onclick='hide(event)'>
                      Hide
                    </button>
                  </div>
                  <small class="text-muted">image id: ${picture.id}</small>
                </div>
              </div>
            </div>`;
    const picturesRow = document.getElementById("picturesRow");
    picturesRow.appendChild(column);
  });
};

const displaySecondaryImg = function (pictureArr) {
  pictureArr.forEach((picture) => {
    const column = document.createElement("div");
    column.classList.add("col-md-4");
    column.innerHTML = `
              <div class="card mb-4 shadow-sm">
                <img src=${picture.src.medium} class="bd-placeholder-img card-img-top" />
                <div class="card-body">
                  <h5 class="card-title">Lorem Ipsum</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">
                        View
                      </button>
                      <button type="button" class="btn btn-sm btn-outline-secondary" onclick='hide(event)'>
                        Hide
                      </button>
                    </div>
                    <small class="text-muted">${picture.id}</small>
                  </div>
                </div>
              </div>`;
    const picturesRow = document.getElementById("picturesRow");
    picturesRow.appendChild(column);
  });
};

const hide = (event) => {
  event.target.closest(".col-md-4").remove();
};

const getImages = function (query) {
  fetch(pexelsUrl + query, {
    headers: {
      Authorization: apiKey,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error loading images");
      }
    })
    .then((any) => {
      console.log(any);
      displayImg(any.photos);
    })
    .catch((error) => {
      console.log("Something's not right", error);
    });
};

const getSecondaryImages = function (query) {
  fetch(pexelsUrl + query, {
    headers: {
      Authorization: apiKey,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error loading images");
      }
    })
    .then((any) => {
      console.log(any);
      displaySecondaryImg(any.photos);
    })
    .catch((error) => {
      console.log("Something's not right", error);
    });
};

loadButton[0].addEventListener("click", () => {
  getImages("kittens");
});

loadSecondaryButton[0].addEventListener("click", () => {
  getSecondaryImages("pandas");
});
