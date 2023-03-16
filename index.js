function modal(place, data, i) {
  place.innerHTML += `
        <div class="card" style="width: 18rem;">
         <img src="${data["カードサムネイル"]}" alt="カードの画像" class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title title04">${data["カード見出し"]}</h5>
                                <p class="card-text text01">${data["カード概要"]}</p>
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                    data-bs-target="#${data["pathid"]}-${i}">
                                    ココを押すと詳細を表示
                                </button>
                            </div>
                    </div>

            <div class="modal fade" id="${data["pathid"]}-${i}" tabindex="-1" aria-labelledby="exampleModalLabel">
            <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">${data["モーダルタイトル"]}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="閉じる"></button>
                    </div>
                    <div class="modal-body text01">
                        ${data["モーダルの内容"]}
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">閉じる</button>
                    </div><!-- /.modal-footer -->
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </div><!-- /.modal -->`
}

function accordionItem(id, data, i) {
  place.innerHTML += `
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-heading${data["pathid"]}">
      <button class="accordion-button collapsed title04" type="button" data-bs-toggle="collapse" data-bs-target="#${data["pathid"]}" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
      <strong>${data["アコーディオン見出し"]}</strong>
      </button>
    </h2>
    <div id="${data["pathid"]}" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div class="accordion-body text01">
      ${data["アコーディオン概要"]}
      </div>
    </div>
  </div>`
}