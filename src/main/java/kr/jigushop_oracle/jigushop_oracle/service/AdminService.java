package kr.jigushop_oracle.jigushop_oracle.service;

import kr.jigushop_oracle.jigushop_oracle.dao.AdminInfoRepository;
import kr.jigushop_oracle.jigushop_oracle.dao.AdminRepository;
import kr.jigushop_oracle.jigushop_oracle.dao.CategoryRepository;
import kr.jigushop_oracle.jigushop_oracle.dao.HeartItemRepository;
import kr.jigushop_oracle.jigushop_oracle.dto.AdminLoginForm;
import kr.jigushop_oracle.jigushop_oracle.dto.HeartChartForm;
import kr.jigushop_oracle.jigushop_oracle.entity.AdminInfo;
import kr.jigushop_oracle.jigushop_oracle.entity.Category;
import kr.jigushop_oracle.jigushop_oracle.entity.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;

@Service
public class AdminService {

    @Autowired AdminRepository adminRepository;
    @Autowired AdminInfoRepository adminInfoRepository;
    @Autowired HeartItemRepository heartItemRepository;

    public Collection<Item> adminListAll() {
        return adminRepository.findAllNative();
    }

    public Item adminFindOne(Long id) {
        return adminRepository.findOneNative(id);
    }

    @Transactional
    public Item editOne(Item itemForm) {
        boolean isUpdate = adminRepository.updateItem(itemForm)>0 ? true : false;
        Item editedItem = null;
        if(isUpdate){
            editedItem = adminRepository.findOneNative(itemForm.getItemId());
        }
        return editedItem;
    }

    @Transactional
    public Item addOne(Item itemForm) {
        boolean isAdded = adminRepository.addItem(itemForm)>0 ? true : false;
        Item addedItem = null;
        if(isAdded){
            addedItem = adminRepository.findOneNative(itemForm.getItemId());
        }
        return addedItem;
    }

    @Transactional
    public int deleteOne(int id) {
        return adminRepository.deleteByIdNative(id);
    }



    public void initialize() {
        System.out.println("메서드 실행");

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
                    .build(),

                Item.builder()
                    .categoryId(101L)
                    .itemName("납작한 대나무칫솔")
                    .brand("지구샵")
                    .itemOption("일반용, 어린이용")
                    .itemDesc("더 가볍고 얇은, 납작한 버전의 대나무칫솔입니다.")
                    .img("https://cdn.imweb.me/thumbnail/20230728/d8e0e26c23416.png, https://cdn.imweb.me/thumbnail/20221223/177e6ddb1bdc7.jpg, https://cdn.imweb.me/thumbnail/20221223/c93cde23244fc.jpg")
                    .price(1500L)
                    .build(),

                Item.builder()
                    .categoryId(101L)
                    .itemName("면 화장솜 (4매입)")
                    .brand("소락")
                    .itemOption("")
                    .itemDesc("일회용 화장솜을 대체하는 다회용 면화장솜입니다")
                    .img("https://cdn.imweb.me/thumbnail/20220131/1f462d212b5a0.jpg, https://cdn.imweb.me/thumbnail/20220131/5cdae4df58093.jpg, https://cdn.imweb.me/thumbnail/20221028/4bc3fda6abf31.jpg")
                    .price(11000L)
                    .build(),

                Item.builder()
                    .categoryId(101L)
                    .itemName("오리지널고체치약 150정입")
                    .brand("지구샵")
                    .itemOption("")
                    .itemDesc("제로웨이스트 양치시간에 대한 지구샵의 진심을 담은 오리지널 고체치약입니다. 한 알씩 집어 사용하는 편리함까지 더한 제로웨이스트 양치시간, 지금 시작해요:)")
                    .img("https://cdn.imweb.me/thumbnail/20220816/f16e88e754602.jpg, https://cdn.imweb.me/thumbnail/20220816/7f2073927cdac.jpg, https://cdn.imweb.me/thumbnail/20220226/92aeb66e46a4c.jpg")
                    .price(13400L)
                    .build(),

                Item.builder()
                    .categoryId(101L)
                    .itemName("올바른 샴푸바 중건성용 100g")
                    .brand("동구밭")
                    .itemOption("")
                    .itemDesc("청결한 두피를 위한 각질케어 기능성의 자몽향이 매력적인 순식물성 샴푸바입니다.")
                    .img("https://cdn.imweb.me/thumbnail/20220928/ab51f2e317f98.jpg, https://cdn.imweb.me/thumbnail/20221029/5a3aeb26cb455.jpg, https://cdn.imweb.me/thumbnail/20221029/32d73015877b5.jpg")
                    .price(9500L)
                    .build(),

                Item.builder()
                    .categoryId(101L)
                    .itemName("올바른 아기비누 알로에")
                    .brand("동구밭")
                    .itemOption("")
                    .itemDesc("순한 성분에 깔끔한 세정력, 무향까지! 아이들 뿐 아니라 향에 민감하셨던 지구주민들에게도 추천해요!")
                    .img("https://cdn.imweb.me/thumbnail/20220928/7b4213d2e455d.jpg, https://cdn.imweb.me/thumbnail/20221029/4ce2da535c1a7.jpg, https://cdn.imweb.me/thumbnail/20221029/794f77aff6755.jpg")
                    .price(9500L)
                    .build(),

                Item.builder()
                    .categoryId(101L)
                    .itemName("험블 치실")
                    .brand("더험블코리아")
                    .itemOption("")
                    .itemDesc("종이상자에 담아 플라스틱케이스를 줄이고 식물성 왁스로 코팅된 민트 비건 치실")
                    .img("https://cdn.imweb.me/thumbnail/20230615/ae49170fa8570.jpg, https://cdn.imweb.me/thumbnail/20230615/ae49170fa8570.jpg")
                    .price(5900L)
                    .build(),

                Item.builder()
                    .categoryId(101L)
                    .itemName("칫솔꽂이")
                    .brand("노플라스틱선데이")
                    .itemOption("하늘, 보라, 검정")
                    .itemDesc("재사용플라스틱으로 만들어진 칫솔꽂이 입니다.")
                    .img("https://cdn.imweb.me/thumbnail/20220908/0f6e10b705a98.jpg, https://cdn.imweb.me/thumbnail/20230727/1affc0f57818c.jpg")
                    .price(5000L)
                    .build(),

                Item.builder()
                    .categoryId(101L)
                    .itemName("재사용 플라스틱 알약커팅기")
                    .brand("지구샵")
                    .itemOption("초록, 파랑, 빨강, 검정")
                    .itemDesc("고체치약을 작게 쪼개서 사용하시던 지구주민님의 의견에 귀기울여 탄생한 알약커팅기! 순환된 병뚜껑 20개가 알약커팅기로 재탄생되었어요. 고체치약 뿐만 아니라 다양한 알약도 자를 수 있답니다.")
                    .img("https://cdn.imweb.me/thumbnail/20221223/61fba5c11fa44.jpg, https://cdn.imweb.me/thumbnail/20221223/9e95fdfbb7dd1.jpg, https://cdn.imweb.me/thumbnail/20221223/07cb6f98422d0.jpg")
                    .price(9900L)
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
                    .build(),

                Item.builder()
                    .categoryId(102L)
                    .itemName("재사용 플라스틱 밀봉클립")
                    .brand("지구샵")
                    .itemOption("초록, 파랑, 빨강, 검정")
                    .itemDesc("순환된 병뚜껑 5개가 밀봉 클립으로 재탄생! 종이봉투, 비닐봉투를 끼워서 고정시켜 밀봉해보세요.")
                    .img("https://cdn.imweb.me/thumbnail/20221223/354c1219cd654.jpg, https://cdn.imweb.me/thumbnail/20221223/93b1c1952f0c4.jpg, https://cdn.imweb.me/thumbnail/20221223/d876d6e901a7b.jpg")
                    .price(4000L)
                    .build(),

                Item.builder()
                    .categoryId(102L)
                    .itemName("천연 물방울 수세미")
                    .brand("지구샵")
                    .itemOption("")
                    .itemDesc("물방울 모양으로 가공한 천연 수세미입니다. 면 고리가 달려 있어 보관이 용이해요. (낱개 제품)")
                    .img("https://cdn.imweb.me/thumbnail/20220129/1e63fd03eec3b.jpg, https://cdn.imweb.me/thumbnail/20220129/d7e46814f87c9.jpg, https://cdn.imweb.me/thumbnail/20201029/02b10c9ca4faa.jpg")
                    .price(3500L)
                    .build(),

                Item.builder()
                    .categoryId(102L)
                    .itemName("유기농 핸드타월 (3매)")
                    .brand("지구샵")
                    .itemOption("GOTS 인증 받은 유기농 면으로 만들어진 핸드타월입니다.")
                    .itemDesc("GOTS 인증 받은 유기농 면으로 만들어진 핸드타월입니다.")
                    .img("https://cdn.imweb.me/thumbnail/20221012/cd56863434adf.jpg, https://cdn.imweb.me/thumbnail/20221012/03d49e4caf700.jpg, https://cdn.imweb.me/thumbnail/20221012/0cfd996a91f55.jpg")
                    .price(12000L)
                    .build(),

                Item.builder()
                    .categoryId(102L)
                    .itemName("유기농 배색 그물 장바구니")
                    .brand("지구샵")
                    .itemOption("")
                    .itemDesc("지구샵과 연남점, 그로서리 매장의 포인트를 담은 유기농 그물장바구니에요. 일상 곳곳에서 비닐이나 일회용 제품 대신 사용하며 제로웨이스트 라이프, 지구샵과 함께해요!")
                    .img("https://cdn.imweb.me/thumbnail/20221209/ef0ab51d01aad.jpg, https://cdn.imweb.me/thumbnail/20221209/c6de72ee924a1.jpg, https://cdn.imweb.me/thumbnail/20221209/1a903b53bdbdc.jpg")
                    .price(7000L)
                    .build(),

                Item.builder()
                    .categoryId(102L)
                    .itemName("라탄 컵받침")
                    .brand("지구샵")
                    .itemOption("")
                    .itemDesc("천연재료로 짜여진 라탄 티코스터입니다. 핸드메이드 제품으로, 자연스러운 분위기를 연출할 수 있어요. 컵, 작은 그릇, 소품, 악세사리 등을 올려두는 다용도 소품으로 활용해보세요.")
                    .img("https://cdn.imweb.me/thumbnail/20210615/6baf8041cd1b7.jpg, https://cdn.imweb.me/thumbnail/20210615/1508ef4f1dba9.jpg, https://cdn.imweb.me/thumbnail/20210615/5ff6c14c97164.jpg")
                    .price(3500L)
                    .build(),

                Item.builder()
                    .categoryId(102L)
                    .itemName("보틀 세척솔")
                    .brand("소렉스")
                    .itemOption("")
                    .itemDesc("텀블러 등과 같은 긴 용기를 세척하기에 용이한 세척솔입니다")
                    .img("https://cdn.imweb.me/thumbnail/20220210/248710a6c5a8b.jpg, https://cdn.imweb.me/thumbnail/20200724/e2f760d73ee3d.jpg, https://cdn.imweb.me/thumbnail/20200724/ed7042054ebf6.jpg")
                    .price(11500L)
                    .build(),

                Item.builder()
                    .categoryId(102L)
                    .itemName("손편한 앞접시세트(5개입)")
                    .brand("탄소창고")
                    .itemOption("")
                    .itemDesc("손잡이가 있고 가벼워 캠핑이나 피크닉, 가정에서도 사용하기 좋은 CXP 소재의 앞접시 입니다.")
                    .img("https://cdn.imweb.me/thumbnail/20221102/4186b2bab9216.jpg, https://cdn.imweb.me/thumbnail/20221102/2bc72ff94cb13.jpg, https://cdn.imweb.me/thumbnail/20221102/629d0ed36dea7.jpg")
                    .price(16500L)
                    .build(),

                Item.builder()
                    .categoryId(102L)
                    .itemName("소창 티백")
                    .brand("소락")
                    .itemOption("")
                    .itemDesc("플라스틱 FREE! 미세플라스틱 걱정 없이 재사용 가능한 소창티백입니다.")
                    .img("https://cdn.imweb.me/thumbnail/20211005/bbea082b568a5.jpg, https://cdn.imweb.me/thumbnail/20211005/345e0118e8a9c.jpg, https://cdn.imweb.me/thumbnail/20211005/647067915829c.jpg")
                    .price(3000L)
                    .build(),

                /*
                //생활
                Item.builder()
                    .categoryId(103L)
                    .itemName("")
                    .brand("")
                    .itemOption("")
                    .itemDesc("")
                    .img("")
                    .price()
                    .build(),


                //음료용품
                Item.builder()
                    .categoryId(104L)
                    .itemName("")
                    .brand("")
                    .itemOption("")
                    .itemDesc("")
                    .img("")
                    .price()
                    .build(),

                화장품
                Item.builder()
                    .categoryId(105L)
                    .itemName("")
                    .brand("")
                    .itemOption("")
                    .itemDesc("")
                    .img("")
                    .price()
                    .build(),


                 */

        };
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

//        Arrays.stream(categorys).forEach(category -> categoryRepository.save(category));
        Arrays.stream(items).forEach(item -> adminRepository.save(item));

    }

    public boolean login(AdminLoginForm adminInfo) {
        AdminInfo dbInfo = adminInfoRepository.findByIdNative(adminInfo.getAdminUid());

        if(dbInfo == null) return false;
        System.out.println(adminInfo.getAdminUpw());
        System.out.println(dbInfo.getAdminUpw());
        if(adminInfo.getAdminUpw().equals(dbInfo.getAdminUpw()))
            return true;
        else
            return false;
    }

    @Transactional
    public boolean join(AdminInfo adminInfo) {
        int isSave = adminInfoRepository.saveAdminInfo(adminInfo);
        return isSave>0 ? true : false;
    }

    public List<HeartChartForm> heartChart() {
        List<Object[]> result = adminRepository.findCountEntity();
        List<HeartChartForm> chartFormData = new ArrayList<>();

        for (Object[] row : result) {
            HeartChartForm dto = new HeartChartForm();
            dto.setCategoryId(row[0].toString());
            dto.setCount(Long.parseLong(row[1].toString()));
            chartFormData.add(dto);
        }

        return chartFormData;
    }
}
