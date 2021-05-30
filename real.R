library(dplyr)

sales <- read.csv('C:/sangu/2ndproject/data/sales_preprocessed_2019.csv')
ddang <- read.csv('C:/sangu/2ndproject/data/ddang_preprocessed_2019.csv')
real_ddang <- read.csv('C:/sangu/2ndproject/data/real_ddang_preprocessed_2019.csv')

View(sales)
View(ddang)
View(real_ddang)

# 동별 매출
sales_copy <- sales
sales_copy <- sales_copy %>% group_by(address) %>% summarise(all = (sum(money) / sum(sales_c)))
View(sales_copy)

# 동별 공시지가
ddang_copy <- ddang
ddang_copy <- ddang_copy %>% group_by(address) %>% summarise(mean = mean(money))
View(ddang_copy1)
class(ddang_copy1)

# 동별 실거래가
real_ddang_copy <- real_ddang
real_ddang_copy <- real_ddang_copy %>% group_by(address) %>% summarise(tot = (sum(money) / sum(size)))
View(real_ddang_copy)

# 구별 매출
sales_copy1 <- sales %>% group_by(address2) %>% summarise(all = (sum(money) / sum(sales_c)))
View(sales_copy1)

# 구별 공시지가
ddang_copy1 <- ddang %>% group_by(address2) %>% summarise(mean = mean(money))
View(ddang_copy1) 


# 구별 실거래가
real_ddang_copy1 <- real_ddang %>% group_by(address2) %>% summarise(tot = (sum(money) / sum(size)))
View(real_ddang_copy1)


# top10매출 지역
sales_top10 <- sales_copy %>% arrange(desc(all)) %>% head(10)
sales_top10_1 <- sales_copy1 %>% arrange(desc(all)) %>% head(10)
write.table(sales_top10,file="sales_top10_2016.txt")
write.table(sales_top10_1,file="sales_top10_1_2016.txt")

# 법정동명 컬럼 통일################### 여기서 txt파일 2개 생성


test2 <- left_join(sales_copy1, ddang_copy1, by="address2")
test2 <- left_join(test2, real_ddang_copy1, by="address2")
test2 <- test2 %>% filter(!is.na(tot) & !is.na(all) & !is.na(mean))
test2 <- rename(test2, 자치구명=address2, 공시지가=mean, 실거래가=tot)
View(test2)
write.table(test2,file="test2_2016.txt")

# 동별 매출 극단치 제거
test <- left_join(sales_copy, ddang_copy, by="address")
test <- left_join(test, real_ddang_copy, by="address")
test <- test %>% filter(!is.na(tot) & !is.na(all) & !is.na(mean))
test <- rename(test, 자치구명=address, 공시지가=mean, 실거래가=tot)
View(test)
boxplot(test$all)$stats
test <- test %>% filter(all > 8665)
test <- test %>% filter(all<29730)
test <- rename(test, 매출평균=all)
write.table(test, file="test_2019.txt")
test2$매출평균 <-  ((test2$매출평균-min(test2$매출평균))/(max(test2$매출평균)-min(test2$매출평균)))*100
test2$공시지가 <-  ((test2$공시지가-min(test2$공시지가))/(max(test2$공시지가)-min(test2$공시지가)))*100
test2$실거래가 <-  ((test2$실거래가-min(test2$실거래가))/(max(test2$실거래가)-min(test2$실거래가)))*100
View(test2)
write.table(test2$자치구명, file="test22.txt", row.names=FALSE)
write.table(test2$매출평균, file="test23.txt", row.names=FALSE)
write.table(test2$공시지가, file="test24.txt", row.names=FALSE)
write.table(test2$실거래가, file="test25.txt", row.names=FALSE)
