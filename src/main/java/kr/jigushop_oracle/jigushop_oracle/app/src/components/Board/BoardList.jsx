export default function BoardList() {
    // ChatGPT ...
    return (
        <> 
        <div class="container text-center mt-5 mx-5 px-4">
            <p class="col align-self-center">문의하기</p>
        </div><!--//shop-tit-->
        
        <div class="notice_list container ">
            <table class="table">
                <tr><!--열 이름-->
                    <th class=""><small class="text-secondary lead" style="font-size: 0.8em;">NO</small></th>
                    <th class="text-center" style="width:40em"><small class="text-secondary lead" style="font-size: 0.8em;">제목</small></th>
                    <th class=""><small class="text-secondary lead" style="font-size: 0.8em;">글쓴이</small></th>
                    <th class=""><small class="text-secondary lead" style="font-size: 0.8em;">작성시간</small></th>
                </tr><!--//열 이름-->
                <?php
                    for($i = 0; $i<mysqli_num_rows($arr); $i++){
                        $notice_row = mysqli_fetch_row($arr);
                        echo "
                            <tr>
                                <td>$n_no</td>
                                <td><a href='notice_detail.php?n_no=$notice_row[0]' class='text-decoration-none' style='color: black;'>$notice_row[3]</a></td>
                                <td>$notice_row[1]</td>
                                <td>$notice_row[5]</td>
                            </tr>
                        ";
                        $n_no += 1;
                    }
                ?>
            </table>
            <div class="row">
                <a class="col text-end text-decoration-none" href="notice_write.php"><span class="me-5">글쓰기</span></a>
            </div>
        </div>

    </>
    )
}