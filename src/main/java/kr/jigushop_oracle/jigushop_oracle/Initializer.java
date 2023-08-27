package kr.jigushop_oracle.jigushop_oracle;

import kr.jigushop_oracle.jigushop_oracle.dao.AdminRepository;
import kr.jigushop_oracle.jigushop_oracle.dao.CategoryRepository;
import kr.jigushop_oracle.jigushop_oracle.dao.ItemRepository;
import kr.jigushop_oracle.jigushop_oracle.entity.Category;
import kr.jigushop_oracle.jigushop_oracle.entity.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;

//기본 데이터 가져오기
@Component
//class Initializer implements CommandLineRunner {
class Initializer {

    @Autowired private CategoryRepository categoryRepository;
    @Autowired private AdminRepository adminRepository;


//    @Override
    public void run(String... strings) {
        System.out.println("이니셜라이저 run " + strings.toString());
        //카테고리 초기값 주기
        Category[] categorys = {
                Category.builder()
                        .categoryId(101L)
                        .categoryName("욕실")
                        .build(),

                Category.builder()
                        .categoryId(102L)
                        .categoryName("주방")
                        .build(),

                Category.builder()
                        .categoryId(103L)
                        .categoryName("생활")
                        .build(),

                Category.builder()
                        .categoryId(104L)
                        .categoryName("음료용품")
                        .build(),

                Category.builder()
                        .categoryId(105L)
                        .categoryName("화장품")
                        .build()
        };

        Arrays.stream(categorys).forEach(category -> categoryRepository.save(category));

        //상품 초기값 주기
        Item[] items = {

                //욕실
                Item.builder()
                        .categoryId(101L)
                        .itemName("노세범 샴푸바 (지성용)")
                        .brand("솝퓨리")
                        .itemOption("")
                        .itemDesc("지성 두피용 샴푸, 린스 기능을 담은 올인원 약산성 샴푸바입니다.")
                        .img("https://cdn.imweb.me/thumbnail/20221102/12b974edc57c3.jpg, https://cdn.imweb.me/thumbnail/20220305/f1b356ad81ba3.jpg, https://cdn.imweb.me/thumbnail/20221028/61e02222b9163.jpg")
                        .price(16000L)
                        .best('0')
                        .sale('0')
                        .build(),

                Item.builder()
                        .categoryId(101L)
                        .itemName("납작한 대나무칫솔")
                        .brand("지구샵")
                        .itemOption("일반용, 어린이용")
                        .itemDesc("더 가볍고 얇은, 납작한 버전의 대나무칫솔입니다.")
                        .img("https://cdn.imweb.me/thumbnail/20230728/d8e0e26c23416.png, https://cdn.imweb.me/thumbnail/20221223/177e6ddb1bdc7.jpg, https://cdn.imweb.me/thumbnail/20221223/c93cde23244fc.jpg")
                        .price(1500L)
                        .best('0')
                        .sale('0')
                        .build(),

                Item.builder()
                        .categoryId(101L)
                        .itemName("면 화장솜 (4매입)")
                        .brand("소락")
                        .itemOption("")
                        .itemDesc("일회용 화장솜을 대체하는 다회용 면화장솜입니다")
                        .img("https://cdn.imweb.me/thumbnail/20220131/1f462d212b5a0.jpg, https://cdn.imweb.me/thumbnail/20220131/5cdae4df58093.jpg, https://cdn.imweb.me/thumbnail/20221028/4bc3fda6abf31.jpg")
                        .price(11000L)
                        .best('0')
                        .sale('0')
                        .build(),

                Item.builder()
                        .categoryId(101L)
                        .itemName("오리지널고체치약 150정입")
                        .brand("지구샵")
                        .itemOption("")
                        .itemDesc("제로웨이스트 양치시간에 대한 지구샵의 진심을 담은 오리지널 고체치약입니다. 한 알씩 집어 사용하는 편리함까지 더한 제로웨이스트 양치시간, 지금 시작해요:)")
                        .img("https://cdn.imweb.me/thumbnail/20220816/f16e88e754602.jpg, https://cdn.imweb.me/thumbnail/20220816/7f2073927cdac.jpg, https://cdn.imweb.me/thumbnail/20220226/92aeb66e46a4c.jpg")
                        .price(13400L)
                        .best('0')
                        .sale('0')
                        .build(),

                Item.builder()
                        .categoryId(101L)
                        .itemName("올바른 샴푸바 중건성용 100g")
                        .brand("동구밭")
                        .itemOption("")
                        .itemDesc("청결한 두피를 위한 각질케어 기능성의 자몽향이 매력적인 순식물성 샴푸바입니다.")
                        .img("https://cdn.imweb.me/thumbnail/20220928/ab51f2e317f98.jpg, https://cdn.imweb.me/thumbnail/20221029/5a3aeb26cb455.jpg, https://cdn.imweb.me/thumbnail/20221029/32d73015877b5.jpg")
                        .price(9500L)
                        .best('0')
                        .sale('1')
                        .build(),

                Item.builder()
                        .categoryId(101L)
                        .itemName("올바른 아기비누 알로에")
                        .brand("동구밭")
                        .itemOption("")
                        .itemDesc("순한 성분에 깔끔한 세정력, 무향까지! 아이들 뿐 아니라 향에 민감하셨던 지구주민들에게도 추천해요!")
                        .img("https://cdn.imweb.me/thumbnail/20220928/7b4213d2e455d.jpg, https://cdn.imweb.me/thumbnail/20221029/4ce2da535c1a7.jpg, https://cdn.imweb.me/thumbnail/20221029/794f77aff6755.jpg")
                        .price(9500L)
                        .best('0')
                        .sale('1')
                        .build(),

                Item.builder()
                        .categoryId(101L)
                        .itemName("온몸비누(자몽) 미니 20g")
                        .brand("지구샵")
                        .itemOption("")
                        .itemDesc("머리부터 발끝까지 하나로! 팜유&인공색소, 향료, 합성계면활성제 FREE까지! 지구에 더 가까운 온몸비누로 제로웨이스트 욕실생활을 실천해요:)")
                        .img("https://cdn.imweb.me/thumbnail/20220721/afb52faca4084.jpg, https://cdn.imweb.me/thumbnail/20220721/1d11f95e3f390.jpg, https://cdn.imweb.me/thumbnail/20220721/f505b638877a0.jpg")
                        .price(2500L)
                        .best('0')
                        .sale('0')
                        .build(),

                Item.builder()
                        .categoryId(101L)
                        .itemName("칫솔꽂이")
                        .brand("노플라스틱선데이")
                        .itemOption("하늘, 보라, 검정")
                        .itemDesc("재사용플라스틱으로 만들어진 칫솔꽂이 입니다.")
                        .img("https://cdn.imweb.me/thumbnail/20220908/0f6e10b705a98.jpg, https://cdn.imweb.me/thumbnail/20230727/1affc0f57818c.jpg")
                        .price(5000L)
                        .best('0')
                        .sale('0')
                        .build(),

                Item.builder()
                        .categoryId(101L)
                        .itemName("재사용 플라스틱 알약커팅기")
                        .brand("지구샵")
                        .itemOption("초록, 파랑, 빨강, 검정")
                        .itemDesc("고체치약을 작게 쪼개서 사용하시던 지구주민님의 의견에 귀기울여 탄생한 알약커팅기! 순환된 병뚜껑 20개가 알약커팅기로 재탄생되었어요. 고체치약 뿐만 아니라 다양한 알약도 자를 수 있답니다.")
                        .img("https://cdn.imweb.me/thumbnail/20221223/61fba5c11fa44.jpg, https://cdn.imweb.me/thumbnail/20221223/9e95fdfbb7dd1.jpg, https://cdn.imweb.me/thumbnail/20221223/07cb6f98422d0.jpg")
                        .price(9900L)
                        .best('0')
                        .sale('1')
                        .build(),

                //주방
                Item.builder()
                        .categoryId(102L)
                        .itemName("설거지비누 150g")
                        .brand("리앤에코")
                        .itemOption("")
                        .itemDesc("주방에서 발생하는 플라스틱 쓰레기를 줄이고 발달장애인의 경제적 자립을 생각한 식물성 원료로만 만들어진 설거지 비누입니다.")
                        .img("https://cdn.imweb.me/thumbnail/20220811/8eec61c369836.jpg, https://cdn.imweb.me/thumbnail/20220811/bdff38ae0b48b.jpg")
                        .price(4300L)
                        .best('0')
                        .sale('0')
                        .build(),

                Item.builder()
                        .categoryId(102L)
                        .itemName("재사용 플라스틱 밀봉클립")
                        .brand("지구샵")
                        .itemOption("초록, 파랑, 빨강, 검정")
                        .itemDesc("순환된 병뚜껑 5개가 밀봉 클립으로 재탄생! 종이봉투, 비닐봉투를 끼워서 고정시켜 밀봉해보세요.")
                        .img("https://cdn.imweb.me/thumbnail/20221223/354c1219cd654.jpg, https://cdn.imweb.me/thumbnail/20221223/93b1c1952f0c4.jpg, https://cdn.imweb.me/thumbnail/20221223/d876d6e901a7b.jpg")
                        .price(4000L)
                        .best('0')
                        .sale('0')
                        .build(),

                Item.builder()
                        .categoryId(102L)
                        .itemName("천연 물방울 수세미")
                        .brand("지구샵")
                        .itemOption("")
                        .itemDesc("물방울 모양으로 가공한 천연 수세미입니다. 면 고리가 달려 있어 보관이 용이해요. (낱개 제품)")
                        .img("https://cdn.imweb.me/thumbnail/20220129/1e63fd03eec3b.jpg, https://cdn.imweb.me/thumbnail/20220129/d7e46814f87c9.jpg, https://cdn.imweb.me/thumbnail/20201029/02b10c9ca4faa.jpg")
                        .price(3500L)
                        .best('0')
                        .sale('0')
                        .build(),

                Item.builder()
                        .categoryId(102L)
                        .itemName("유기농 핸드타월 (3매)")
                        .brand("지구샵")
                        .itemOption("GOTS 인증 받은 유기농 면으로 만들어진 핸드타월입니다.")
                        .itemDesc("GOTS 인증 받은 유기농 면으로 만들어진 핸드타월입니다.")
                        .img("https://cdn.imweb.me/thumbnail/20221012/cd56863434adf.jpg, https://cdn.imweb.me/thumbnail/20221012/03d49e4caf700.jpg, https://cdn.imweb.me/thumbnail/20221012/0cfd996a91f55.jpg")
                        .price(12000L)
                        .best('0')
                        .sale('0')
                        .build(),

                Item.builder()
                        .categoryId(102L)
                        .itemName("유기농 배색 그물 장바구니")
                        .brand("지구샵")
                        .itemOption("")
                        .itemDesc("지구샵과 연남점, 그로서리 매장의 포인트를 담은 유기농 그물장바구니에요. 일상 곳곳에서 비닐이나 일회용 제품 대신 사용하며 제로웨이스트 라이프, 지구샵과 함께해요!")
                        .img("https://cdn.imweb.me/thumbnail/20221209/ef0ab51d01aad.jpg, https://cdn.imweb.me/thumbnail/20221209/c6de72ee924a1.jpg, https://cdn.imweb.me/thumbnail/20221209/1a903b53bdbdc.jpg")
                        .price(7000L)
                        .best('0')
                        .sale('1')
                        .build(),

                Item.builder()
                        .categoryId(102L)
                        .itemName("라탄 컵받침")
                        .brand("지구샵")
                        .itemOption("")
                        .itemDesc("천연재료로 짜여진 라탄 티코스터입니다. 핸드메이드 제품으로, 자연스러운 분위기를 연출할 수 있어요. 컵, 작은 그릇, 소품, 악세사리 등을 올려두는 다용도 소품으로 활용해보세요.")
                        .img("https://cdn.imweb.me/thumbnail/20210615/6baf8041cd1b7.jpg, https://cdn.imweb.me/thumbnail/20210615/1508ef4f1dba9.jpg, https://cdn.imweb.me/thumbnail/20210615/5ff6c14c97164.jpg")
                        .price(3500L)
                        .best('0')
                        .sale('0')
                        .build(),

                Item.builder()
                        .categoryId(102L)
                        .itemName("보틀 세척솔")
                        .brand("소렉스")
                        .itemOption("")
                        .itemDesc("텀블러 등과 같은 긴 용기를 세척하기에 용이한 세척솔입니다")
                        .img("https://cdn.imweb.me/thumbnail/20220210/248710a6c5a8b.jpg, https://cdn.imweb.me/thumbnail/20200724/e2f760d73ee3d.jpg, https://cdn.imweb.me/thumbnail/20200724/ed7042054ebf6.jpg")
                        .price(11500L)
                        .best('0')
                        .sale('0')
                        .build(),

                Item.builder()
                        .categoryId(102L)
                        .itemName("손편한 앞접시세트(5개입)")
                        .brand("탄소창고")
                        .itemOption("")
                        .itemDesc("손잡이가 있고 가벼워 캠핑이나 피크닉, 가정에서도 사용하기 좋은 CXP 소재의 앞접시 입니다.")
                        .img("https://cdn.imweb.me/thumbnail/20221102/4186b2bab9216.jpg, https://cdn.imweb.me/thumbnail/20221102/2bc72ff94cb13.jpg, https://cdn.imweb.me/thumbnail/20221102/629d0ed36dea7.jpg")
                        .price(16500L)
                        .best('0')
                        .sale('1')
                        .build(),

                Item.builder()
                        .categoryId(102L)
                        .itemName("나무 요리 젓가락")
                        .brand("지구샵")
                        .itemOption("")
                        .itemDesc("플라스틱 조리도구를 대체하는 나무 요리 젓가락입니다. 옻칠마감으로 더 오랫동안 사용할 수 있답니다.")
                        .img("https://cdn.imweb.me/thumbnail/20210911/dd452649486c6.jpg, https://cdn.imweb.me/thumbnail/20210911/ab4d8abf98b96.jpg, https://cdn.imweb.me/thumbnail/20210911/91f441fb6cf92.jpg")
                        .price(3000L)
                        .best('0')
                        .sale('0')
                        .build(),


                //생활
                Item.builder()
                    .categoryId(103L)
                    .itemName("휴대용 면휴지 (4매입)")
                    .brand("소락")
                    .itemOption("파랑, 빨강, 동백, 바다")
                    .itemDesc("화장지, 냅킨을 대체하는 휴대용 와입스입니다. 면 파우치 속 소창 와입스 속지 4장이 들어있어요 :)")
                    .img("https://cdn.imweb.me/thumbnail/20210720/0d8c4f89383ca.jpg, https://cdn.imweb.me/thumbnail/20210615/e54950954abdf.jpg, https://cdn.imweb.me/thumbnail/20210615/098e344f49657.jpg")
                    .price(10500L)
                    .best('0')
                    .sale('1')
                    .build(),

                Item.builder()
                    .categoryId(103L)
                    .itemName("잘떼스틱")
                    .brand("수퍼빈")
                    .itemOption("")
                    .itemDesc("더 쉬운 분리배출, 잘떼스틱과 함께해요!")
                    .img("https://cdn.imweb.me/thumbnail/20230209/54acbfed4fcf5.jpg, https://cdn.imweb.me/thumbnail/20220905/97bc4a7420cc0.jpg")
                    .price(13000L)
                    .best('0')
                    .sale('0')
                    .build(),

                Item.builder()
                    .categoryId(103L)
                    .itemName("튜브짜개")
                    .brand("노플라스틱선데이")
                    .itemOption("보라, 하늘, 노랑, 검정, 하양")
                    .itemDesc("튜브 형태의 핸드크림, 립밤 등 다양한 곳에 사용할 수 있는 재사용플라스틱 튜브짜개 입니다. 버려지는 플라스틱을 업사이클해 만들어지는 제품 특성상 모든 상품의 모양과 색이 동일하지 않습니다.")
                    .img("https://cdn.imweb.me/thumbnail/20230102/7037a80086adf.jpg, https://cdn.imweb.me/thumbnail/20230102/ad3a6ff959031.jpg")
                    .price(4000L)
                    .best('0')
                    .sale('0')
                    .build(),

                Item.builder()
                    .categoryId(103L)
                    .itemName("인센스 스틱")
                    .brand("풍경향방")
                    .itemOption("진여, 금향, 참솔향")
                    .itemDesc("깊고 그윽한 천연향을 느낄 수 있는 인센스 스틱입니다. 풍경향방의 모든 향은 100% 천연 재료로  안심하고 사용할 수 있습니다. ")
                    .img("https://cdn.imweb.me/thumbnail/20210805/2abc497f5e1ee.jpg, https://cdn.imweb.me/thumbnail/20210805/509e94fd3db3e.jpg, https://cdn.imweb.me/thumbnail/20220304/0965ed35e2971.jpg")
                    .price(6400L)
                    .best('0')
                    .sale('1')
                    .build(),

                Item.builder()
                    .categoryId(103L)
                    .itemName("고체 세탁세제")
                    .brand("블루워시")
                    .itemOption("")
                    .itemDesc("드럼 세탁기와 일반 세탁기에 모두 사용할 수 있는 친환경 고체 세탁세제입니다.")
                    .img("https://cdn.imweb.me/thumbnail/20220411/d405ebcebcda8.jpg, https://cdn.imweb.me/thumbnail/20220330/9304eac29abfe.jpg, https://cdn.imweb.me/thumbnail/20220411/f8b733c998488.jpg")
                    .price(20800L)
                    .best('0')
                    .sale('1')
                    .build(),

                Item.builder()
                    .categoryId(103L)
                    .itemName("고체 섬유유연제")
                    .brand("블루워시")
                    .itemOption("")
                    .itemDesc("드럼 세탁기와 일반 세탁기에 모두 사용할 수 있는 친환경 고체 섬유유연제입니다.")
                    .img("https://cdn.imweb.me/thumbnail/20220704/c5eef4c52d66a.jpg, https://cdn.imweb.me/thumbnail/20220704/c5eef4c52d66a.jpg, https://cdn.imweb.me/thumbnail/20220704/30636af5925b5.jpg")
                    .price(19800L)
                    .best('0')
                    .sale('1')
                    .build(),

                Item.builder()
                    .categoryId(103L)
                    .itemName("업사이클 키링")
                    .brand("지구샵")
                    .itemOption("그린, 믹스")
                    .itemDesc("버려지는 병뚜껑을 모아 분쇄-제작한 지구샵 업사이클 키링입니다. 언제 어디서나 지구와 공존하는 착한 마음과 함께합니다.")
                    .img("https://cdn.imweb.me/thumbnail/20230818/6887615bdf085.jpg, https://cdn.imweb.me/thumbnail/20230818/19ff01e34143e.jpg, https://cdn.imweb.me/thumbnail/20230818/7563908d6e09a.jpg")
                    .price(2000L)
                    .best('0')
                    .sale('1')
                    .build(),

                Item.builder()
                    .categoryId(103L)
                    .itemName("미니 에코백")
                    .brand("바잇미")
                    .itemOption("그린, 화이트, 오렌지")
                    .itemDesc("넓은 바닥면으로 물건 수납이 용이한 미니 캔버스 백입니다")
                    .img("https://cdn.imweb.me/thumbnail/20220305/861c17f0a7da9.jpg, https://cdn.imweb.me/thumbnail/20220305/48465ea0bb1d3.jpg, https://cdn.imweb.me/thumbnail/20220305/9929f7b31b019.jpg")
                    .price(8900L)
                    .best('0')
                    .sale('1')
                    .build(),


                //음료용품
                Item.builder()
                    .categoryId(104L)
                    .itemName("소창 티백")
                    .brand("소락")
                    .itemOption("M, L")
                    .itemDesc("플라스틱 FREE! 미세플라스틱 걱정 없이 재사용 가능한 소창티백입니다.")
                    .img("https://cdn.imweb.me/thumbnail/20211005/bbea082b568a5.jpg, https://cdn.imweb.me/thumbnail/20211005/bbea082b568a5.jpg, https://cdn.imweb.me/thumbnail/20211005/345e0118e8a9c.jpg")
                    .price(1200L)
                    .best('0')
                    .sale('1')
                    .build(),

                Item.builder()
                    .categoryId(104L)
                    .itemName("실리콘빨대 (24cm)")
                    .brand("이크")
                    .itemOption("핑크, 파랑")
                    .itemDesc("깨질 염려가 없는 말랑말랑한 실리콘 재질의 다회용 빨대입니다(24cm)")
                    .img("https://cdn.imweb.me/thumbnail/20220305/1fecd79379d4b.jpg, https://cdn.imweb.me/thumbnail/20220305/cc36b73c9327b.jpg, https://cdn.imweb.me/thumbnail/20220305/f3d3424f66875.jpg")
                    .price(2200L)
                    .best('0')
                    .sale('0')
                    .build(),

                Item.builder()
                    .categoryId(104L)
                    .itemName("유리빨대")
                    .brand("지구샵")
                    .itemOption("15cm, 21.5cm")
                    .itemDesc("국내에서 제작되어 식품용인증을 받은 내열 유리 빨대입니다. 일반 유리 빨대보다 더 튼튼하고 내구성이 좋아요!")
                    .img("https://cdn.imweb.me/thumbnail/20210813/be1a60900ffb2.jpg, https://cdn.imweb.me/thumbnail/20210813/6f06e020a0e7c.jpg")
                    .price(4000L)
                    .best('0')
                    .sale('0')
                    .build(),

                Item.builder()
                    .categoryId(104L)
                    .itemName("버블티용 내열유리빨대")
                    .brand("지구샵")
                    .itemOption("")
                    .itemDesc("과육, 타피오카펄도 문제 없이! 작은 건더기가 있는 음료를 마실 때 더욱 편한 다회용 빨대입니다")
                    .img("https://cdn.imweb.me/thumbnail/20220219/9ca73505e5374.jpg, https://cdn.imweb.me/thumbnail/20220219/66654306d9867.jpg")
                    .price(5000L)
                    .best('0')
                    .sale('0')
                    .build(),

                Item.builder()
                    .categoryId(104L)
                    .itemName("보틀 (590ml)")
                    .brand("스토조")
                    .itemOption("세이지, 카네이션, 캐시미어")
                    .itemDesc("접고 펼 수 있어 휴대성이 좋은 물방울 모양의 실리콘 텀블러입니다.")
                    .img("https://cdn.imweb.me/thumbnail/20211109/9fad6bd9ed235.jpg, https://cdn.imweb.me/thumbnail/20211109/d7788e74ab3cf.jpg, https://cdn.imweb.me/thumbnail/20211109/015c2a2f978c7.jpg")
                    .price(36000L)
                    .best('0')
                    .sale('1')
                    .build(),

                Item.builder()
                    .categoryId(104L)
                    .itemName("빨대세척솔")
                    .brand("지구샵")
                    .itemOption("나일론, 사이잘")
                    .itemDesc("다회용 빨대를 더욱 위생적으로 관리할 수 있는 빨대 세척솔입니다(나일론/사이잘)")
                    .img("https://cdn.imweb.me/thumbnail/20220305/c2646559e1300.jpg, https://cdn.imweb.me/thumbnail/20220305/b7be48594d854.jpg, https://cdn.imweb.me/thumbnail/20220305/dc46d4eb05977.jpg")
                    .price(1500L)
                    .best('0')
                    .sale('0')
                    .build(),

                Item.builder()
                    .categoryId(104L)
                    .itemName("스테인레스 빨대")
                    .brand("지구샵")
                    .itemOption("직선, 곡선")
                    .itemDesc("반영구적으로 사용 가능한 직선형, 곡선형 스테인레스 다회용 빨대입니다")
                    .img("https://cdn.imweb.me/thumbnail/20221229/9327232b19146.jpg, https://cdn.imweb.me/thumbnail/20221229/3427ced131dd3.jpg, \thttps://cdn.imweb.me/thumbnail/20221229/abe5cd8eb1233.jpg")
                    .price(2000L)
                    .best('0')
                    .sale('0')
                    .build(),

                Item.builder()
                    .categoryId(104L)
                    .itemName("개방형 실리콘빨대 (일반용)")
                    .brand("에이비라이프")
                    .itemOption("그린, 핑크, 연보라, 빨강")
                    .itemDesc("개방형으로 세척이 더욱 편리한 실리콘 빨대입니다.")
                    .img("https://cdn.imweb.me/thumbnail/20210928/4d4337e715071.jpg, https://cdn.imweb.me/thumbnail/20210928/bf274311600f5.jpg")
                    .price(1900L)
                    .best('0')
                    .sale('0')
                    .build(),

                Item.builder()
                    .categoryId(104L)
                    .itemName("개방형 실리콘빨대 (버블티용)")
                    .brand("에이비라이프")
                    .itemOption("핑크, 연보라")
                    .itemDesc("개방형으로 세척이 더욱 편리한 버블티용 실리콘 빨대입니다.")
                    .img("https://cdn.imweb.me/thumbnail/20210924/419657b4d4dce.jpg, https://cdn.imweb.me/thumbnail/20210924/498111419c71c.jpg")
                    .price(3200L)
                    .best('0')
                    .sale('0')
                    .build(),

                Item.builder()
                    .categoryId(104L)
                    .itemName("유기농빨대파우치")
                    .brand("지구샵")
                    .itemOption("")
                    .itemDesc("유기농 면으로 만들어진 다목적 파우치입니다. 빨대, 세척솔, 칫솔, 수저 등 여러가지 다회용품을 담아 휴대하기 좋아요 :)")
                    .img("https://cdn.imweb.me/thumbnail/20210813/5888bff923b1a.jpg, https://cdn.imweb.me/thumbnail/20210813/5e7bbd3fadb1c.jpg")
                    .price(1500L)
                    .best('0')
                    .sale('0')
                    .build(),

                //화장품
                Item.builder()
                    .categoryId(105L)
                    .itemName("데일리 톤업 비건 썬스크린")
                    .brand("허블룸")
                    .itemOption("")
                    .itemDesc("옥시벤존 FREE, 동물성 원료 FREE의 종이 패키지 비건 톤업 썬스크린입니다.")
                    .img("https://cdn.imweb.me/thumbnail/20211224/8b8acf5b362d6.jpg, https://cdn.imweb.me/thumbnail/20211224/092ca5255849b.jpg, https://cdn.imweb.me/thumbnail/20211224/0f87f5ee86c23.jpg")
                    .price(2600L)
                    .best('0')
                    .sale('1')
                    .build(),

                Item.builder()
                    .categoryId(105L)
                    .itemName("올바른 거품 입욕제")
                    .brand("동구밭")
                    .itemOption("페퍼민트, 라벤더, 레몬그라스, 로즈")
                    .itemDesc("식물 유래 원료와 은은한 향의 입욕제로 일상에 휴식을 더해요!")
                    .img("https://cdn.imweb.me/thumbnail/20230727/09283b2b6d6e1.jpg, https://cdn.imweb.me/thumbnail/20221028/a03528c6e5631.jpg, https://cdn.imweb.me/thumbnail/20221028/be36d4427770a.jpg")
                    .price(7000L)
                    .best('0')
                    .sale('0')
                    .build(),

                Item.builder()
                    .categoryId(105L)
                    .itemName("오리진밤 (멀티밤)")
                    .brand("샘크래프트")
                    .itemOption("")
                    .itemDesc("가볍게 밀어 올려 사용하는 식물 성분의 밤입니다. 입술, 눈가 주위 등 보습이 필요한 어느 곳에든 편하게 발라주시면 됩니다 :) ")
                    .img("https://cdn.imweb.me/thumbnail/20230626/0967618d6b1ce.jpg, https://cdn.imweb.me/thumbnail/20230626/7ace28eeb45e9.jpg, https://cdn.imweb.me/thumbnail/20230626/34a392641e243.jpg")
                    .price(9900L)
                    .best('0')
                    .sale('0')
                    .build(),

                Item.builder()
                    .categoryId(105L)
                    .itemName("비건 립밤")
                    .brand("율립")
                    .itemOption("올티밋, 코랄, 얼모스트윈터")
                    .itemDesc("생분해 가능한  PLA플라스틱 용기에 담기고 리필 제품으로 교체가 가능한 비건 립밤입니다.")
                    .img("https://cdn.imweb.me/thumbnail/20220304/9253223ea16e5.jpg, https://cdn.imweb.me/thumbnail/20220304/8e63503b6c98c.jpg")
                    .price(25000L)
                    .best('0')
                    .sale('1')
                    .build(),

                Item.builder()
                    .categoryId(105L)
                    .itemName("멜팅마일리 리필(60g)")
                    .brand("마일리솝")
                    .itemOption("핑크, 옐로우, 블루")
                    .itemDesc("식물성 원료로만 만들어진 가루세안제 입니다.")
                    .img("https://cdn.imweb.me/thumbnail/20220519/7da1df03b4803.jpg, https://cdn.imweb.me/thumbnail/20220519/901e477e4d3ca.jpg, https://cdn.imweb.me/thumbnail/20220519/a200d536e8e61.jpg")
                    .price(24600L)
                    .best('0')
                    .sale('1')
                    .build(),

                Item.builder()
                    .categoryId(105L)
                    .itemName("퍼퓸밤 (이그제틱부쉬)")
                    .brand("샘크래프트")
                    .itemOption("")
                    .itemDesc("식물성 오일과 천연 왁스에 특별한 향이 담겨 만들어진 플라스틱 FREE 고체 향수입니다.")
                    .img("https://cdn.imweb.me/thumbnail/20220629/f1b9fb79529ec.jpg, https://cdn.imweb.me/thumbnail/20220629/96097e4cbec68.jpg, https://cdn.imweb.me/thumbnail/20211013/ed10475043b4d.jpg")
                    .price(12000L)
                    .best('0')
                    .sale('1')
                    .build(),

                Item.builder()
                    .categoryId(105L)
                    .itemName("샌달우드 오일세럼")
                    .brand("샘크래프트")
                    .itemOption("")
                    .itemDesc("끈적임 없이 흡수가 빠른 식물성 오일 세럼입니다. ")
                    .img("https://cdn.imweb.me/thumbnail/20211216/507b2440fa548.jpg, https://cdn.imweb.me/thumbnail/20211216/c771536405438.jpg")
                    .price(39000L)
                    .best('0')
                    .sale('0')
                    .build(),

        };
        Arrays.stream(items).forEach(item -> adminRepository.save(item));
    }
}