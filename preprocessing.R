library(dplyr)
# install.packages('stringr')
library(stringr)
# 19년 서울시 상권 매출 csv 호출
sales <- read.csv('C:/sangu/2ndproject/data/서울시 우리마을가게 상권분석서비스(상권-추정매출)_2019.csv')
View(sales)
sales_copy <- sales %>% select('상권_코드_명', '당월_매출_금액', '기준_분기_코드', '당월_매출_건수')
View(sales_copy)

# sales_copy 컬럼명 변경
sales_copy <- rename(sales_copy, address=상권_코드_명, money=당월_매출_금액, sales_c=당월_매출_건수)
View(sales_copy)

# sales_copy address컬럼에 언더바('_') 제거 
sales_copy$address <- gsub("_","",sales_copy$address)

# 구주소-신주소 변경 csv데이터 호출(ad)
ad <- read.csv('C:/sangu/2ndproject/data/서울특별시.csv')
View(ad)

# ad 컬럼(도로명, 법정동명, 시군구용건물명) select
ad_copy <- ad %>% select(도로명, 법정동명)
ad_copy2 <- ad %>% select(시군구용건물명, 법정동명)
ad_copy3 <- ad %>% select(법정동명, 시군구)

# sales_copy 공백제거
sales_copy$address <- str_trim(sales_copy$address)

# ad파일 컬럼명 변경(left_join 위함)
ad_copy <- rename(ad_copy, address=도로명)
ad_copy2 <- rename(ad_copy2, address=시군구용건물명)
ad_copy3 <- rename(ad_copy3, address2=법정동명)

# ad파일 중복 데이터 제거
ad_copy <- ad_copy[-which(duplicated(ad_copy$address)),]
ad_copy3 <- ad_copy3[-which(duplicated(ad_copy3$address2)),]
View(ad_copy3)

# sales_copy의 구주소 컬럼 추가(시장, 역 제외)
sales_copy <- left_join(sales_copy, ad_copy, by='address')

# sales_copy 의 address 컬럼의 띄어쓰기로 문자열 분리(서울시 강동구 xxx)
sales_copy$address <- strsplit(sales_copy$address, split=" ")

# 위에서 분리한 문자열중 마지막 문자열(우리에게 필요한 주소)만 추출 시간이 오래걸림
for(i in seq(1,length(sales_copy$address))) {
  sales_copy$address[i] <- unlist(sales_copy$address[i])[length(sales_copy$address[[i]])]
}

# address컬럼중 숫자 제거(ex 역삼역3)
sales_copy$address <- gsub("\\d","",sales_copy$address)

# ad_copy2$address의 비어있는 데이터를 결측치로 치환1
ad_copy2$address <- ifelse(ad_copy2$address == "", NA, ad_copy2$address)

# ad_copy2$address의 데이터(ex '2호선 건대입구역')를 " "로 split
ad_copy2$address <- strsplit(ad_copy2$address, split=" ")

# ad_copy2$address의 데이터 중 리스트 중 마지막 데이터만 추출('2호선' '건대입구' -> '건대입구') 시간이 오래걸림
ad_copy2 <- ad_copy2 %>% filter(!is.na(address))
for(i in seq(1,length(ad_copy2$address))) {
  ad_copy2$address[i] <- unlist(ad_copy2$address[i])[length(ad_copy2$address[[i]])]
} 

ad_copy2$address <- unlist(ad_copy2$address)


# sales_copy에 법정동명(지하철역) 추가(컬럼이 법정동명.x, 법정동명.y로 생성됨)
sales_copy <- left_join(sales_copy, ad_copy2, by='address')
View(sales_copy)


# sales_copy의 두개컬럼(법정동명.x, 법정동명.y 를 법정동명으로 합침)
sales_copy$address2 <- paste(sales_copy$법정동명.x, sales_copy$법정동명.y, sep="")
View(sales_copy)

# 위에서 합친 데이터는 (ex NA건대입구역)와 같이 결측치가 포함된 문자열로 저장, NA를 제거
sales_copy$address2 <- gsub("NA", "", sales_copy$address2)

# sales_copy 에서 법정동명, 분기, 매출데이터만 추출
sales_copy <- sales_copy %>% select(address2, money, quarters, sales_c)
View(sales_copy)

# sales_copy 의 법정동명 데이터가 비어있는곳 제거
sales_copy <- sales_copy %>% filter(address2!="")
View(sales_copy)

# sales_copy 에 시군구명 컬럼을 추가
sales_copy <- left_join(sales_copy, ad_copy3, by="address2")
View(sales_copy)

# sales_copy 법정동명의 --동2가 같은 데이터를 --동으로 잘라냄
sales_copy$address2 <- gsub("\\d가$", "", sales_copy$address2)

# 마지막 컬럼명 조정
sales_copy <- rename(sales_copy, address=address2, address2=시군구)

# 전처리파일 저장
write.csv(sales_copy, "sales_preprocessed_2019.csv")

####################### 공시지가 전처리 ################################
ddang <- read.csv('C:/sangu/2ndproject/data/공시지가_2019년.csv')
View(ddang)
ddang_copy <- ddang %>% select('시군구명', '법정동명', '공시지가.원...')
View(ddang_copy)

# ddang_copy 컬럼명 변경
ddang_copy <- rename(ddang_copy, address=법정동명, money=공시지가.원..., address2=시군구명)
View(ddang_copy)

# ddang_copy 법정동명의 --동2가 같은 데이터를 --동으로 잘라냄
ddang_copy$address <- gsub("\\d가$", "", ddang_copy$address)
View(ddang_copy)

# 전처리 파일 저장
write.csv(ddang_copy, "ddang_preprocessed_2019.csv")

####################### 실거래가 전처리 ################################
# csv파일 불러오기가 무한로딩이라 엑셀로 불러온 후 database로 타입 변환
library(readxl)
real_ddang <- read_excel('C:/sangu/2ndproject/data/실거래가2019.xlsx')
real_ddang <- as.data.frame(real_ddang)
View(real_ddang)
class(real_ddang)
# real_ddang 데이터 컬럼4개 추출 및 데이터프레임 복사
real_ddang_copy <- real_ddang %>% select('자치구명', '법정동명', '건물면적', '물건금액')
View(real_ddang_copy)

# real_ddang_copy 컬럼명 변경
real_ddang_copy <- rename(real_ddang_copy, address=법정동명, money=물건금액, size=건물면적, address2=자치구명)
View(real_ddang_copy)

# real_ddang_copy 법정동명의 --동2가 같은 데이터를 --동으로 잘라냄
real_ddang_copy$address <- gsub("\\d가$", "", real_ddang_copy$address)
View(real_ddang_copy)

# 전처리 파일 저장
write.csv(real_ddang_copy, "real_ddang_preprocessed_2019.csv")
