function modal(place, data, i, id) {
  place.innerHTML += `
  <div class="card mb-3" style="max-width: 540px; background-color:#${data["color"]};">
    <div class="row g-0">
      <div class="col">
        <img width="100px" src="../Image/Mission.jpg" alt="...">
      </div>
      <div class="col-8">
        <div class="card-body">
        <h5 class="card-title">${data["カード見出し"]}</h5>
          <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                        data-bs-target="#${id}-${i + 1}">
                        ココを押すと詳細を表示
                        </button>
        </div>
      </div>
    </div>
  </div>
  
  <div class="modal fade" id="${id}-${i + 1}" tabindex="-1" aria-labelledby="exampleModalLabel">
    <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">${data["モーダルタイトル"]}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="閉じる"></button>
        </div>
        <div class="modal-body text01">
        <header>
        <img width="100%" src="../Image/BOOTH/${id}-${i + 1}.png" alt="" srcset="">
        </header>
        ${data["モーダルの内容"]}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">閉じる</button>
        </div><!-- /.modal-footer -->
      </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
  </div><!-- /.modal -->`
}
