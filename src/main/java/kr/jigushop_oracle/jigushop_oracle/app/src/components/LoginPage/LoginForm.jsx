export default function LoginForm() {
  return (
      
    // ChatGPT ...
        <>
        <div class="login_box container">
            <div class="img_box w-75">
                <img class="w-25" src="https://cdn.imweb.me/thumbnail/20200516/bd6d0ab83943e.jpg">
            </div>
            <!--img_box-->
            <div class="widget">
                <form action="login_process.php" method="post">
                    <div class="naver">
                        <button type="button" class="btn_naver btn btn-outline-success mb-3 w-50" onclick="window.location.href = 'notice.html'">네이버로 시작하기</button>
                    </div>
                    <div class="mb-2">
                        <input type="text" class="form-control w-50" id="id" name="id" placeholder="아이디">
                    </div>
                    <div class="mb-1">
                        <input type="password" class="form-control w-50" id="pass" name="pass" placeholder="비밀번호">
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1">로그인상태유지
                    </div>
                    <button type="submit" class="btn btn-success w-50">로그인</button>
                    <div id="loginHelp" class="loginHelp w-50 mb-5">
                        <a class="float-start" href="join.php">회원가입</a>
                        <a class="float-end" href="#"  data-bs-toggle="modal" data-bs-target="#staticBackdrop">아이디 · 비밀번호 찾기</a>
                    </div>

                    <!--모달해보쟈-->

                    <!-- Modal -->
                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                      <div class="modal-dialog  modal-dialog-centered">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">아이디 찾기</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                            <form>
                              <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">Recipient:</label>
                                <input type="text" class="form-control" id="recipient-name">
                              </div>
                              <div class="mb-3">
                                <label for="message-text" class="col-form-label">Message:</label>
                                <textarea class="form-control" id="message-text"></textarea>
                              </div>
                            </form>
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-success col-12">아이디 찾기</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!--끗-->

                    <!--over_h-->
                    <div class="loginHelp w-50">
                        <hr>
                    </div>
                    <button type="button" class="btn btn-secondary mt-3 w-50" onclick="window.location.href = 'notice.html'">비회원 주문배송 조회</button>
                </form>
            </div>
            <!--//widget-->
        </div>
            <!--//container-->
        </>
    )
}