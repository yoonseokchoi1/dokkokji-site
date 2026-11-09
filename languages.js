/* Local translations; no external translation service or visitor data transfer. */
(() => {
const rows = `
도꼭지 KT송파타워점 · 잠실역 10번 출구 인근|DOKKOKJI KT Songpa Tower · Near Jamsil Station Exit 10|DOKKOKJI KT松坡タワー店 · 蚕室駅10番出口近く|DOKKOKJI KT松坡塔店 · 蚕室站10号出口附近
서울 송파구 잠실로 209, KT송파타워 2층 · 길찾기|209 Jamsil-ro, Songpa-gu, Seoul · KT Songpa Tower 2F · Directions|ソウル市松坡区蚕室路209、KT松坡タワー2階 · アクセス|首尔松坡区蚕室路209号，KT松坡塔2楼 · 交通指南
잠실 한식 가족식사: 룸 인원과 이용료 보기 →|Family dining: room capacity and fees (Korean) →|家族でのお食事：個室の人数・利用料金（韓国語）→|家庭聚餐：包间人数与费用（韩语）→
홀 식사 예약 안내|Main dining area reservations|ホール席の予約案内|大厅用餐预约指南
홀 식사 살펴보기|Explore the main dining area|ホール席を見る|了解大厅用餐
룸 인원·이용료 확인|Private room capacity and fees|個室の人数・利用料金|查看包间人数与费用
예약 화면에서 홀 또는 룸을 선택하고 날짜·인원별 가능 여부를 확인해 주세요.|On the booking page, select the main dining area or a private room and check availability for your date and party size.|予約画面でホール席または個室を選び、日付・人数に応じた空き状況をご確認ください。|请在预约页面选择大厅或包间，并确认所选日期及人数的可预约情况。
잠실 · 홀 식사|Jamsil · Main dining area|蚕室 · ホール席|蚕室 · 大厅用餐
동료와의 점심, 둘이 나누는 저녁|Lunch with colleagues, dinner for two|同僚とのランチ、ふたりで楽しむ夕食|同事午餐，两人晚餐
잠실 도꼭지의 홀에서 따뜻한 솥밥을 함께 즐겨보세요.|Share warm Korean pot rice in our main dining area in Jamsil.|蚕室のDOKKOKJIのホール席で、温かい釜炊きご飯をお楽しみください。|在蚕室DOKKOKJI的大厅用餐区，一起享用温暖的韩式釜饭。
도미솥밥 · 전복솥밥 각 29,000원|Sea bream or abalone pot rice · KRW 29,000 per dish|鯛・アワビの釜炊きご飯 各29,000ウォン|鲷鱼釜饭、鲍鱼釜饭 各29,000韩元／份
메뉴와 예약 안내|Menu and reservation information|メニュー・予約案内|菜单与预约指南
예약 화면에서 날짜·인원과 홀 예약 항목을 확인해 주세요. 좌석 위치는 지정이 보장되지 않습니다.|Check the date, party size and main dining area option when booking. Specific seats are not guaranteed.|予約画面で日付・人数・ホール席をご確認ください。座席位置の指定は保証されません。|请在预约页面确认日期、人数及大厅座位选项。不保证指定座位位置。
멤버십|Membership|メンバーシップ|会员服务
다시 찾는 즐거움, 도꼭지 멤버스|More reasons to return to DOKKOKJI|また訪れる楽しみ、DOKKOKJIメンバーズ|再次相聚，DOKKOKJI会员
따뜻한 한 끼와 함께, 소중한 날도 기억하겠습니다.|Good food, warm memories, and your special day.|温かな食事とともに、大切な日も覚えていたい。|用温暖的一餐，记住您的特别日子。
매장에서 회원가입|Join when you visit|ご来店時に会員登録|到店时注册会员
매장 방문 시 QR을 열고 휴대폰 번호를 입력해 주세요. 기존 회원은 체크인, 처음 방문하신 분은 가입으로 안내됩니다.|During your visit, open the store QR link and enter your mobile number. Existing members are directed to check-in; new members to registration.|ご来店時に店内のQRを開き、携帯電話番号をご入力ください。会員の方はチェックイン、初めての方は登録へ進みます。|到店后打开店内二维码链接并输入手机号。已有会员进入签到，新会员进入注册。
회원정보 입력|Enter your details|会員情報を入力|填写会员资料
성함과 생일을 입력하고 가입 안내를 확인해 주세요. 광고성 정보 수신동의는 선택입니다.|Enter your name and birthday and review the registration terms. Consent to promotional messages is optional.|お名前と誕生日を入力し、登録案内をご確認ください。広告情報の受信同意は任意です。|填写姓名和生日并阅读注册说明。接收营销信息的同意为可选项。
마지막으로 카카오톡 채널 추가|Finally, add our KakaoTalk channel|最後にカカオトークのチャンネルを追加|最后添加KakaoTalk频道
생일 혜택 안내를 받으시려면 도꼭지 카카오톡 채널을 꼭 추가해 주세요.|Please add the DOKKOKJI KakaoTalk channel to receive birthday benefit updates through the channel.|誕生日特典のご案内をチャンネルで受け取るため、DOKKOKJIのカカオトークチャンネルを追加してください。|如需通过频道接收生日礼遇通知，请添加DOKKOKJI的KakaoTalk频道。
가입만으로 생일 초대권이 즉시 발급되지는 않습니다. 혜택 대상과 제공 시점은 매장에서 확인해 주세요.|Registration does not immediately issue a birthday voucher. Please ask our staff about eligibility and availability.|登録だけで誕生日招待券が即時発行されることはありません。対象条件と提供時期はスタッフにご確認ください。|注册后不会立即发放生日邀请券。适用条件及发放时间请咨询店员。
매장 방문 시 가입·체크인|Register or check in during your visit|来店時の登録・チェックイン|到店注册或签到
가입 화면은 한국어로 제공됩니다. 휴대폰 번호 입력이 어려우시면 직원에게 문의해 주세요.|The registration form is in Korean. Please ask our staff if you need help entering your mobile number.|登録画面は韓国語です。携帯電話番号の入力でお困りの場合はスタッフにお声がけください。|注册页面为韩语。手机号输入如有困难，请咨询店员。
카카오톡 채널 보기|View our KakaoTalk channel|カカオトークチャンネルを見る|查看KakaoTalk频道
본문으로 바로가기|Skip to content|本文へスキップ|跳转至正文
도꼭지|DOKKOKJI|DOKKOKJI|DOKKOKJI
메뉴|Menu|メニュー|菜单
공간|Space|店内|环境
오시는 길|Visit|アクセス|交通指南
예약 안내|Reservations|ご予約|预约
룸 안내|Private rooms|個室案内|包间
잠실 한식 · 솥밥과 생선구이|Korean dining in Jamsil · Pot rice & grilled fish|蚕室の韓国料理 · 釜炊きご飯と焼き魚|蚕室韩餐 · 锅饭与烤鱼
한국의|A taste of|韓国の味を、|品味韩国，
요리 체험,|Korea,|この一膳で。|从一餐开始。
도꼭지.|DOKKOKJI.|DOKKOKJI.|DOKKOKJI。
도미를 올린 솥밥, 불 위에서 구워낸 금태.|Sea bream pot rice and flame-grilled blackthroat seaperch.|鯛の釜炊きご飯と、香ばしく焼き上げたのどぐろ。|鲷鱼锅饭与香烤赤鯥。
따뜻한 밥과 생선으로 차리는 한 상.|Warm rice and fish, served together.|温かなご飯と魚を楽しむ食卓。|热腾腾的米饭与鱼料理，共成一席。
도꼭지의 메뉴|Explore the menu|メニューを見る|浏览菜单
따뜻한 솥 하나에 담은 한 끼|A warm meal in every pot|一釜に込めた温かな食事|一锅暖心好饭
도미솥밥 · 금태구이 전문|Sea bream pot rice · Grilled blackthroat seaperch|鯛の釜飯・のどぐろ焼き|鲷鱼锅饭 · 烤赤鯥
룸 2–12인|Private rooms for 2–12|個室 2〜12名|包间 2–12人
주차 2시간 무료|2 hours free parking|駐車2時間無料|免费停车2小时
도꼭지의 한 상|At our table|ドッコジの食卓|DOKKOKJI的一餐
도미와 금태,|Sea bream, blackthroat seaperch,|鯛とのどぐろ、|鲷鱼、赤鯥，
그리고 갓 지은 밥.|and freshly cooked rice.|そして炊きたてのご飯。|配上新鲜出锅的米饭。
도미·전복·금태를 담은 솥밥부터|Pot rice with sea bream, abalone or blackthroat seaperch,|鯛・あわび・のどぐろの釜飯から、|从鲷鱼、鲍鱼、赤鯥锅饭，
생선구이와 계절솥밥을 곁들인 식사까지.|or grilled fish with seasonal vegetable pot rice.|焼き魚と季節の釜飯の定食まで。|到烤鱼搭配时令蔬菜锅饭的套餐。
솥밥에는 프랑스산 이즈니버터와|Our pot rice comes with French Isigny butter|釜飯にはフランス産イズニーバターと|锅饭搭配法国伊斯尼黄油，
직접 구운 곱창김을 함께 내어드립니다.|and seaweed roasted in our kitchen.|店内で焼いた韓国海苔を添えます。|以及店内烤制的韩国海苔。
솥밥과 생선구이 메뉴·가격|Sotbap and grilled fish: menu and prices|釜飯と焼き魚のメニュー・料金|锅饭与烤鱼菜单及价格
솥밥과 생선구이,|Pot rice and grilled fish.|釜飯と焼き魚。|锅饭与烤鱼，
취향에 맞게 골라보세요.|Find your favorite.|お好みの一品をお選びください。|挑选您喜欢的美味。
도미솥밥|Sea bream pot rice|鯛の釜飯|鲷鱼锅饭
금태솥밥|Blackthroat seaperch pot rice|のどぐろの釜飯|赤鯥锅饭
전복솥밥|Abalone pot rice|あわびの釜飯|鲍鱼锅饭
도미전복솥밥|Sea bream & abalone pot rice|鯛とあわびの釜飯|鲷鱼鲍鱼锅饭
계절솥밥|Seasonal vegetable pot rice|季節の野菜釜飯|时令蔬菜锅饭
29,000원|KRW 29,000|29,000ウォン|29,000韩元
43,000원|KRW 43,000|43,000ウォン|43,000韩元
도미와 갓 지은 밥이 어우러지는 한 솥.|Sea bream paired with freshly cooked rice.|鯛と炊きたてのご飯を一釜に。|鲷鱼与新鲜米饭的美味结合。
노릇하게 구운 금태를 올린 솥밥. 수량 한정.|Pot rice topped with grilled blackthroat seaperch. Limited portions.|香ばしいのどぐろをのせた釜飯。数量限定。|锅饭上铺香烤赤鯥，限量供应。
전복의 풍미를 담아낸 따뜻한 한 솥.|Warm pot rice with the delicate flavor of abalone.|あわびの旨みを楽しむ温かな釜飯。|一锅米饭，尽享鲍鱼鲜味。
식사메뉴와 함께|Served with meal sets|定食と一緒に|搭配套餐
생선구이와 제육볶음 등에 곁들이는 계절솥밥.|Seasonal pot rice served with grilled fish, spicy pork and other mains.|焼き魚や豚肉の辛味炒めなどに添える季節の釜飯。|搭配烤鱼、辣炒猪肉等主菜的时令锅饭。
도꼭지의 솥밥에는 프랑스산 이즈니버터와 직접 구운 곱창김이 제공됩니다.|Pot rice includes French Isigny butter and house-roasted Korean seaweed.|釜飯にはフランス産イズニーバターと店内で焼いた韓国海苔が付きます。|锅饭附法国伊斯尼黄油和店内烤制的韩国海苔。
버터는 2인에 1개 제공되며, 추가 시 1개당 1,000원입니다.|One butter portion per two guests; extra portions KRW 1,000 each.|バターは2名様につき1個。追加は1個1,000ウォンです。|每两位提供一份黄油，追加每份1,000韩元。
메뉴판 원본 보기|Original Korean menu|韓国語メニュー原本|查看韩文原版菜单
(새 창)|(new tab)|（新しいタブ）|（新窗口）
대표 솥밥|Signature pot rice|看板の釜飯|招牌锅饭
식사|Meal sets|定食|套餐
2인 한상|Sets for two|2名様セット|双人套餐
일품|À la carte|一品料理|单点
추가|Add-ons|追加メニュー|加点
수량 한정|Limited portions|数量限定|限量供应
구이와 식사|Grills & meal sets|焼き物と定食|烧烤与套餐
고등어구이 + 계절솥밥|Grilled mackerel + seasonal pot rice|さば焼き＋季節の釜飯|烤青花鱼＋时令锅饭
대삼치구이 + 계절솥밥|Grilled large Spanish mackerel + seasonal pot rice|大さわら焼き＋季節の釜飯|烤大马鲛鱼＋时令锅饭
명란구이 + 계절솥밥|Grilled pollock roe + seasonal pot rice|焼き明太子＋季節の釜飯|烤明太鱼籽＋时令锅饭
제육볶음 + 계절솥밥|Spicy stir-fried pork + seasonal pot rice|豚肉の辛味炒め＋季節の釜飯|辣炒猪肉＋时令锅饭
국내산 갈치구이 + 계절솥밥|Grilled Korean hairtail + seasonal pot rice|韓国産太刀魚焼き＋季節の釜飯|烤韩国带鱼＋时令锅饭
낙지볶음 + 계절솥밥|Spicy stir-fried octopus + seasonal pot rice|タコの辛味炒め＋季節の釜飯|辣炒章鱼＋时令锅饭
둘이 나누는 한 상|A table for two|二人で分かち合う一膳|两人共享的一餐
금태구이·제육 한상|Grilled seaperch & spicy pork set|のどぐろ焼き・豚肉炒めセット|烤赤鯥与辣炒猪肉套餐
금태구이·낙지 한상|Grilled seaperch & spicy octopus set|のどぐろ焼き・タコ炒めセット|烤赤鯥与辣炒章鱼套餐
금태구이 1미 + 제육볶음 + 계절솥밥 2개|1 whole grilled seaperch + spicy pork + 2 seasonal pot rice|のどぐろ1尾＋豚肉の辛味炒め＋季節の釜飯2個|烤赤鯥1条＋辣炒猪肉＋时令锅饭2份
금태구이 1미 + 낙지볶음 + 계절솥밥 2개|1 whole grilled seaperch + spicy octopus + 2 seasonal pot rice|のどぐろ1尾＋タコの辛味炒め＋季節の釜飯2個|烤赤鯥1条＋辣炒章鱼＋时令锅饭2份
일품요리|À la carte|一品料理|单点料理
계절회 5종 A / B|5 seasonal sashimi varieties A / B|季節のお刺身5種 A / B|时令刺身5种 A / B
저녁 · 수량 한정|Dinner only · Limited portions|ディナー限定・数量限定|仅晚餐 · 限量供应
국내산갈치 매콤한조림|Spicy braised Korean hairtail|韓国産太刀魚の辛煮|辣炖韩国带鱼
도미머리조림|Braised sea bream head|鯛のかぶと煮|炖鲷鱼头
금태구이|Grilled blackthroat seaperch|のどぐろ焼き|烤赤鯥
일품메뉴에는 솥밥이 포함되지 않습니다.|Pot rice is not included with à la carte dishes.|一品料理に釜飯は含まれません。|单点料理不含锅饭。
추가 메뉴 · 솥밥 변경|Add-ons & rice upgrades|追加・釜飯の変更|加点与锅饭升级
고등어구이|Grilled mackerel|さば焼き|烤青花鱼
대삼치구이|Grilled large Spanish mackerel|大さわら焼き|烤大马鲛鱼
국내산 갈치구이|Grilled Korean hairtail|韓国産太刀魚焼き|烤韩国带鱼
제주은갈치·목포먹갈치|Hairtail from Jeju or Mokpo|済州・木浦産太刀魚|济州或木浦产带鱼
명란구이|Grilled pollock roe|焼き明太子|烤明太鱼籽
낙지볶음|Spicy stir-fried octopus|タコの辛味炒め|辣炒章鱼
제육볶음|Spicy stir-fried pork|豚肉の辛味炒め|辣炒猪肉
추가메뉴는 대표·식사·일품 메뉴 주문 후 이용하실 수 있습니다.|Add-ons are available with a signature rice, meal set or à la carte order.|追加メニューは釜飯・定食・一品料理をご注文の方が対象です。|加点须先点招牌锅饭、套餐或单点料理。
갈치·낙지·금태한상 솥밥 변경: 전복·도미 +15,000원 / 도미전복 +19,000원 / 금태 +30,000원|Rice upgrades for hairtail, octopus and seaperch sets: abalone or sea bream +KRW 15,000 / both +KRW 19,000 / seaperch +KRW 30,000|太刀魚・タコ・のどぐろセットの釜飯変更：あわび・鯛＋15,000ウォン／鯛とあわび＋19,000ウォン／のどぐろ＋30,000ウォン|带鱼、章鱼及赤鯥套餐锅饭升级：鲍鱼或鲷鱼＋15,000韩元／鲷鱼鲍鱼＋19,000韩元／赤鯥＋30,000韩元
가격 단위: 원|All prices in KRW|価格はすべて韓国ウォン|价格单位：韩元
주방에서 식탁까지|From kitchen to table|厨房から食卓へ|从厨房到餐桌
한 솥을 완성하고,|Each pot prepared,|一釜を炊き上げ、|用心做好每一锅，
한 상을 차립니다.|each table set.|一膳を整える。|细心摆好每一餐。
불 위의 금태부터 갓 완성한 솥밥까지 · 11초 · 무음|Grilled fish to freshly cooked rice · 11 sec · Silent|焼き魚から炊きたての釜飯まで・11秒・音声なし|从烤鱼到新鲜锅饭 · 11秒 · 无声
솥밥을 준비하는 도꼭지의 주방|Preparing pot rice in our kitchen|釜飯を仕上げるドッコジの厨房|准备锅饭的厨房
도꼭지의 상차림|The DOKKOKJI table|ドッコジの食卓|DOKKOKJI的餐桌
따뜻한 한 솥,|A warm pot,|温かな一釜、|暖暖一锅，
정갈한 한 상.|a thoughtfully set table.|心を込めた一膳。|精致一餐。
갓 지은 솥밥과 노릇하게 구운 생선,|Fresh pot rice and golden grilled fish,|炊きたての釜飯と香ばしい焼き魚、|新鲜锅饭与香烤鱼，
곁들여 먹는 반찬까지.|with side dishes to enjoy together.|そして、添えるおかずまで。|配上各式小菜。
함께 나누는 식사의 즐거움을 담았습니다.|Made for the pleasure of sharing a meal.|食事を分かち合う喜びをお届けします。|共享美好用餐时光。
솥밥과 함께 즐기는 도꼭지의 요리|Dishes to enjoy alongside pot rice|釜飯と楽しむドッコジの料理|与锅饭一同享用的料理
룸과 홀 둘러보기 · 15초 · 무음|Rooms & dining area · 15 sec · Silent|個室と店内・15秒・音声なし|包间与大厅 · 15秒 · 无声
함께하는 공간|A space to share|ともに過ごす空間|相聚的空间
마주 앉아,|Sit together,|向かい合って、|相对而坐，
오롯이 함께.|enjoy the moment.|ゆっくりと。|共享此刻。
둘이 마주하는 식사부터 가족 모임까지.|From dinner for two to family gatherings.|二人のお食事からご家族のお集まりまで。|从双人用餐到家庭聚会。
인원에 맞는 룸에서|Choose a room for your party|人数に合った個室で、|选择适合人数的包间，
편안하게 식사를 나눠보세요.|and share a relaxed meal.|ゆっくりお食事をお楽しみください。|轻松享用美食。
개의 룸|private rooms|個室|间包间
이용 인원|guests|名様|人
분 이용|minutes|分制|分钟
룸 이용 안내|Private room details|個室のご案内|包间使用说明
함께할 자리를|A table|お席を整えて、|为您准备
준비합니다.|awaits you.|お待ちしています。|相聚的餐桌。
방문하실 날짜와 인원을 선택해|Choose your date and party size.|ご来店日と人数を選んで、|请选择到店日期与人数，
네이버 또는 캐치테이블에서 예약하세요.|Book via Naver or Catchtable.|NaverまたはCatchtableでご予約ください。|通过Naver或Catchtable预约。
네이버 예약|Book on Naver|Naverで予約|Naver预约
캐치테이블 예약|Book on Catchtable|Catchtableで予約|Catchtable预约
온라인 예약은 24시간 가능합니다.|Online reservations are available 24 hours a day.|オンライン予約は24時間受付。|在线预约24小时开放。
전화 예약은 매일 오전 10시부터 가능합니다.|Phone reservations open daily at 10:00 am.|電話予約は毎日午前10時から。|电话预约每天上午10点开始。
룸 1개|One private room|個室1室|1间包间
최대 6인 · 20,000원|Up to 6 guests · KRW 20,000|最大6名・20,000ウォン|最多6人 · 20,000韩元
룸 1번 + 2번 연결|Rooms 1 & 2 connected|個室1・2を連結|1号与2号包间连通
최대 12인 · 30,000원|Up to 12 guests · KRW 30,000|最大12名・30,000ウォン|最多12人 · 30,000韩元
이용 기준|Room policy|ご利用条件|使用规则
2인부터 · 90분|Minimum 2 guests · 90 minutes|2名様から・90分制|2人起 · 90分钟
룸 이용료는 식사 금액과 별도입니다.|Room fees are charged separately from food.|個室料金はお食事代とは別途です。|包间费与餐费分开收取。
원하시는 좌석은 예약 시 확인해 주세요.|Please confirm seating preferences when booking.|ご希望のお席は予約時にご確認ください。|请在预约时确认座位需求。
잠실에서 만나요|Find us in Jamsil|蚕室でお待ちしています|相约蚕室
서울 송파구 잠실로 209|209 Jamsil-ro, Songpa-gu, Seoul|ソウル市松坡区蚕室路209|首尔市松坡区蚕室路209
KT송파타워 2층|KT Songpa Tower, 2F|KT松坡タワー2階|KT松坡大厦2层
서울 송파구 잠실로 209 KT송파타워 2층|2F KT Songpa Tower, 209 Jamsil-ro, Songpa-gu, Seoul|ソウル市松坡区蚕室路209 KT松坡タワー2階|首尔市松坡区蚕室路209 KT松坡大厦2层
영업시간|Opening hours|営業時間|营业时间
일요일–목요일|Sunday–Thursday|日曜〜木曜|周日至周四
금요일·토요일|Friday & Saturday|金曜・土曜|周五、周六
브레이크타임|Break time|休憩時間|午间休息
매일 15:00–17:00|Daily 15:00–17:00|毎日15:00〜17:00|每天15:00–17:00
라스트오더|Last order|ラストオーダー|最后点餐
일–목 20:40 / 금·토 21:00|Sun–Thu 20:40 / Fri–Sat 21:00|日〜木20:40／金・土21:00|周日–周四20:40／周五、周六21:00
설날·추석 전날과 당일 휴무|Closed on Korean Lunar New Year's Day and Chuseok, and the day before each.|旧正月・秋夕の当日と前日は休業。|韩国农历新年及中秋节当天与前一天休息。
공휴일 영업시간은 예약 시 확인해 주세요.|Please confirm holiday hours when booking.|祝日の営業時間は予約時にご確認ください。|节假日营业时间请在预约时确认。
KT송파타워|KT Songpa Tower|KT松坡タワー|KT松坡大厦
지도 보기|View map|地図を見る|查看地图
주소 복사|Copy address|住所をコピー|复制地址
한국의 요리 체험, 도꼭지.|A taste of Korea, DOKKOKJI.|韓国の味を、ドッコジで。|品味韩国，尽在DOKKOKJI。
메뉴 보기|View menu|メニュー|查看菜单
온라인 예약|Book online|オンライン予約|在线预约

잠실 한식당 도꼭지는 KT송파타워 2층에서 솥밥과 생선구이를 준비합니다.|We serve Korean cuisine centered on pot rice and grilled fish on the second floor of KT Songpa Tower in Jamsil, Seoul.|ソウル・蚕室のKTソンパタワー2階で、釜炊きご飯と焼き魚を中心とした韓国料理をご用意しています。|我们位于首尔蚕室KT松坡大厦2楼，为您准备以锅饭和烤鱼为主的韩餐。
방문 전 자주 묻는 질문|Questions before your visit|ご来店前のよくあるご質問|到店前的常见问题
방문 전 안내|Before your visit|ご来店の前に|到店指南
자주 묻는 질문|Frequently asked questions|よくあるご質問|常见问题
메뉴부터 룸 예약, 주차까지.|Menus, private rooms and parking.|メニューから個室予約、駐車場まで。|从菜单到包间预约、停车。
방문에 필요한 정보를 모았습니다.|Useful details for planning your visit.|ご来店に役立つ情報をまとめました。|为您整理到店所需的信息。
도꼭지의 대표 메뉴는 무엇인가요?|What are your signature dishes?|おすすめのメニューは何ですか？|有哪些招牌菜？
도미솥밥과 전복솥밥은 각각 29,000원, 금태솥밥은 43,000원입니다. 금태솥밥은 수량 한정으로 준비합니다. 고등어·대삼치·갈치 등 생선구이와 계절솥밥을 함께 즐기는 식사 메뉴도 있습니다.|Sea bream pot rice and abalone pot rice are KRW 29,000 each. Blackthroat seaperch pot rice is KRW 43,000 and available in limited quantities. We also serve grilled mackerel, Spanish mackerel and hairtail with seasonal pot rice.|鯛釜飯とあわび釜飯は各29,000ウォン、のどぐろ釜飯は43,000ウォンです。のどぐろ釜飯は数量限定です。さば・さわら・太刀魚などの焼き魚に季節の釜飯を添えた食事メニューもございます。|鲷鱼锅饭和鲍鱼锅饭各为29,000韩元，赤鯥锅饭为43,000韩元，限量供应。另有烤青花鱼、马鲛鱼、带鱼等搭配时令锅饭的餐食。
전체 메뉴와 가격 보기|View all menus and prices|メニューと料金を見る|查看全部菜单与价格
룸은 몇 명까지 이용할 수 있나요?|How many guests can use a private room?|個室は何名まで利用できますか？|包间可以容纳几位客人？
룸은 2인부터 이용할 수 있으며, 룸 1개는 최대 6인까지 가능합니다. 룸 1번과 2번을 연결하면 최대 12인까지 함께 식사할 수 있습니다. 원하시는 날짜와 인원의 룸 이용 가능 여부는 예약 시 확인해 주세요.|Private rooms are available for 2–6 guests. Rooms 1 and 2 can be joined for up to 12 guests. Please check availability for your date and party size when booking.|個室は2名から最大6名までご利用いただけます。1番と2番の個室をつなぐと最大12名までお食事いただけます。ご希望の日程・人数での空室状況はご予約時にご確認ください。|包间可供2至6人使用。1号和2号包间连通后最多可容纳12人。请在预约时确认所需日期及人数的包间空位。
룸 이용료와 이용 시간은 어떻게 되나요?|What are the private room fee and time limit?|個室料金と利用時間を教えてください。|包间费用和使用时间是多少？
룸 1개 이용료는 20,000원, 룸 1번과 2번을 연결하면 30,000원입니다. 룸 이용료는 식사 금액과 별도이며, 이용 시간은 90분입니다.|One private room costs KRW 20,000. Joining rooms 1 and 2 costs KRW 30,000. The room fee is separate from the meal, and the time limit is 90 minutes.|個室1室は20,000ウォン、1番と2番をつないだ個室は30,000ウォンです。個室料金はお食事代と別で、利用時間は90分です。|单个包间费用为20,000韩元，连通1号和2号包间为30,000韩元。包间费与餐费分开计算，使用时间为90分钟。
예약은 어디에서 할 수 있나요?|How can I make a reservation?|どこで予約できますか？|在哪里可以预约？
네이버 예약과 캐치테이블에서 날짜와 인원을 선택해 예약할 수 있습니다. 온라인 예약은 24시간, 전화 예약은 매일 오전 10시부터 가능합니다.|Choose your date and party size on Naver Booking or Catchtable. Online booking is available 24 hours a day. Phone reservations start at 10 a.m. daily.|Naver予約またはCatchtableで日程と人数を選んでご予約いただけます。オンライン予約は24時間、お電話でのご予約は毎日午前10時から承ります。|您可在Naver预约或Catchtable选择日期与人数进行预约。在线预约全天开放，电话预约每天上午10点开始。
예약 방법 보기|View booking options|予約方法を見る|查看预约方式
매장 위치와 주차 안내가 궁금해요.|Where are you, and is parking available?|場所と駐車場について教えてください。|餐厅在哪里？可以停车吗？
도꼭지는 서울 송파구 잠실로 209, KT송파타워 2층에 있습니다. KT송파타워 주차장을 이용하시면 주차 2시간을 무료로 제공합니다.|Find us on the second floor of KT Songpa Tower, 209 Jamsil-ro, Songpa-gu, Seoul. Two hours of free parking are available in the KT Songpa Tower car park.|ソウル市松坡区蚕室路209、KTソンパタワー2階にございます。KTソンパタワー駐車場をご利用の際は、2時間無料です。|我们位于首尔市松坡区蚕室路209号KT松坡大厦2楼。使用KT松坡大厦停车场可享2小时免费停车。
위치와 지도 보기|View location and map|アクセスと地図を見る|查看位置与地图
영업시간과 브레이크타임은 언제인가요?|What are your hours and break time?|営業時間と休憩時間はいつですか？|营业时间和午休时间是什么时候？
일요일부터 목요일은 11:00–21:20, 금요일과 토요일은 11:00–22:00에 운영합니다. 브레이크타임은 매일 15:00–17:00입니다. 라스트오더는 일–목 20:40, 금·토 21:00이며, 공휴일 영업시간은 예약 시 확인해 주세요.|We open 11:00–21:20 Sunday–Thursday and 11:00–22:00 Friday–Saturday, with a daily break from 15:00 to 17:00. Last orders are at 20:40 Sunday–Thursday and 21:00 Friday–Saturday. Please confirm holiday hours when booking.|日曜〜木曜は11:00〜21:20、金曜・土曜は11:00〜22:00です。休憩時間は毎日15:00〜17:00です。ラストオーダーは日曜〜木曜20:40、金曜・土曜21:00です。祝日の営業時間はご予約時にご確認ください。|周日至周四营业时间为11:00–21:20，周五、周六为11:00–22:00，每天15:00–17:00休息。最后点单时间为周日至周四20:40、周五周六21:00。节假日营业时间请在预约时确认。
잠실에서 만나는|In Jamsil,|蚕室で味わう|在蚕室品味
솥밥과 생선구이,|pot rice & grilled fish,|釜飯と焼き魚、|锅饭与烤鱼，
도미·전복솥밥 각 29,000원|Sea bream or abalone pot rice · KRW 29,000 each|鯛・あわび釜飯 各29,000ウォン|鲷鱼或鲍鱼锅饭 各29,000韩元
2–12인 룸 · 주차 2시간 무료|Private rooms for 2–12 · 2 hours free parking|個室2〜12名・駐車2時間無料|2–12人包间 · 免费停车2小时
예약 신청 후 각 예약 서비스의 확정 알림을 확인해 주세요.|Please check the booking service’s confirmation notification after requesting a reservation.|ご予約のお申し込み後、予約サービスからの確定通知をご確認ください。|提交预约申请后，请确认预约平台的确认通知。
7–12인 연결 룸은 전화로 이용 가능 여부를 문의해 주세요.|For a connected room for 7–12 guests, please call to check availability.|7〜12名の連結個室は、お電話で空室状況をお問い合わせください。|7–12人的连通包间，请致电咨询空位。
전화 문의|Call us|電話で問い合わせ|电话咨询
잠실역 10번 출구 인근, 송파구청 옆 KT송파타워(소피텔 건물) 2층입니다.|Near Jamsil Station Exit 10, on the second floor of KT Songpa Tower (Sofitel building), beside Songpa-gu Office.|蚕室駅10番出口近く、松坡区庁隣のKTソンパタワー（ソフィテルの建物）2階です。|位于蚕室站10号出口附近，松坡区厅旁KT松坡大厦（索菲特所在大楼）2楼。
지하 3·4층|Basement levels B3–B4|地下3・4階|地下3、4层
네이버에서 매장·리뷰 보기|Store details & reviews on Naver|Naverで店舗・口コミを見る|在Naver查看餐厅与评价
캐치테이블에서 매장·리뷰 보기|Store details & reviews on Catchtable|Catchtableで店舗・口コミを見る|在Catchtable查看餐厅与评价
네이버 예약과 캐치테이블에서 날짜와 인원을 선택해 예약할 수 있습니다. 온라인 예약은 24시간, 전화 예약은 매일 오전 10시부터 가능합니다. 예약 신청 후 각 예약 서비스의 확정 알림을 확인해 주세요. 7–12인 연결 룸은 전화로 이용 가능 여부를 문의해 주세요. 전화 문의: 02-422-0431.|Choose your date and party size on Naver Booking or Catchtable. Check the confirmation notification after requesting a reservation. Online booking is available 24 hours a day; phone reservations start at 10 a.m. For a connected room for 7–12 guests, call +82-2-422-0431 to check availability.|Naver予約またはCatchtableで日程と人数を選び、お申し込み後に確定通知をご確認ください。オンライン予約は24時間、お電話は毎日午前10時から承ります。7〜12名の連結個室は+82-2-422-0431へお問い合わせください。|请在Naver预约或Catchtable选择日期与人数，提交申请后确认平台的确认通知。在线预约全天开放，电话预约每天上午10点开始。7–12人的连通包间请致电+82-2-422-0431咨询空位。
도꼭지 잠실점|DOKKOKJI Jamsil|DOKKOKJI 蚕室店|DOKKOKJI 蚕室店
솥밥과 생선구이로|Pot rice and grilled fish,|釜飯と焼き魚で、|锅饭与烤鱼，
차리는 한 상.|served together.|一膳を。|共成一席。
잠실점 · KT송파타워 2층 · 잠실역 10번 출구 인근|Jamsil · KT Songpa Tower 2F · Near Jamsil Station Exit 10|蚕室店・KT松坡タワー2階・蚕室駅10番出口近く|蚕室店 · KT松坡大厦2楼 · 蚕室站10号出口附近
잠실점 예약 안내|Jamsil reservations|蚕室店のご予約案内|蚕室店预约指南
잠실점 예약|Book in Jamsil|蚕室店を予約|预约蚕室店
잠실점 예약 안내 →|Jamsil reservations →|蚕室店のご予約案内 →|蚕室店预约指南 →
카카오채널 추가|Add our KakaoTalk channel|カカオトークのチャンネルを追加|添加KakaoTalk频道
매장 소식·혜택 안내 받기|Get restaurant news and benefit updates|店舗のお知らせ・特典情報を受け取る|接收餐厅消息与优惠信息
도꼭지 소식·혜택 안내 받기|Get DOKKOKJI news and benefit updates|DOKKOKJIのお知らせ・特典情報を受け取る|接收DOKKOKJI消息与优惠信息
메뉴를 고르셨나요?|Have you chosen your dishes?|メニューはお決まりですか？|选好菜了吗？
카카오채널 친구 5% 할인|5% off for KakaoTalk channel friends|カカオトークチャンネル友だちは5%割引|KakaoTalk频道好友享5%优惠
기존·신규 카카오채널 친구는 식사금액의 5%를 할인해 드립니다.|Existing and new KakaoTalk channel friends receive 5% off their meal.|既存・新規のカカオトークチャンネル友だちは、お食事代が5%割引となります。|现有及新加入的KakaoTalk频道好友可享餐费5%优惠。
방문 시 채널 친구 화면을 직원에게 보여 주세요.|When you visit, please show your channel friend screen to our staff.|ご来店時に、チャンネル友だち画面をスタッフにご提示ください。|到店时请向店员出示频道好友页面。
예약 1건당 1회 · 다른 할인과 중복 불가 · 별도 종료 공지 전까지|Once per reservation · Cannot be combined with other discounts · Valid until further notice|ご予約1件につき1回・他の割引との併用不可・終了のお知らせまで|每笔预约限用一次 · 不可与其他优惠叠加 · 有效至另行通知
도꼭지의 소식을 카카오톡으로 만나보세요.|Get DOKKOKJI news on KakaoTalk.|DOKKOKJIのお知らせをカカオトークで。|通过KakaoTalk接收DOKKOKJI的消息。
기존·신규 친구 모두 5% 할인 혜택과 매장 소식을 확인하세요.|Existing and new channel friends can find the 5% discount and restaurant news.|既存・新規の友だちの皆様は、5%割引特典と店舗のお知らせをご確認ください。|现有及新加入的频道好友均可查看5%优惠和餐厅消息。
도꼭지 잠실점에서 만나요|Visit DOKKOKJI Jamsil|DOKKOKJI蚕室店でお待ちしています|欢迎光临DOKKOKJI蚕室店
현재 방문 및 예약은 도꼭지 잠실점(공식 매장명: 도꼭지 KT송파타워점)에서 가능합니다. 서울 송파구 잠실로 209, KT송파타워 2층에서 만나요. 마포점(서울 마포구 백범로10길 30)은 영업을 종료했습니다.|Visits and reservations are currently available at DOKKOKJI Jamsil (official listing: DOKKOKJI KT Songpa Tower), on the second floor of KT Songpa Tower, 209 Jamsil-ro, Songpa-gu, Seoul. The Mapo location at 30 Baekbeom-ro 10-gil, Mapo-gu, Seoul has closed.|現在、ご来店・ご予約はDOKKOKJI蚕室店（正式店舗名：DOKKOKJI KT松坡タワー店）で承ります。所在地はソウル市松坡区蚕室路209、KT松坡タワー2階です。ソウル市麻浦区白凡路10キル30の麻浦店は閉店しました。|目前可到访及预约的是DOKKOKJI蚕室店（官方店名：DOKKOKJI KT松坡塔店），地址为首尔市松坡区蚕室路209号KT松坡大厦2楼。位于首尔市麻浦区白凡路10街30号的麻浦店已停止营业。
현재 운영 매장은 어디인가요?|Which location is currently open?|現在営業している店舗はどこですか？|目前营业的是哪家门店？
잠실점 위치와 지도 보기|View the Jamsil location and map|蚕室店の所在地と地図を見る|查看蚕室店位置与地图
가족 모임을 준비하시나요?|Planning a family gathering?|ご家族のお集まりを計画中ですか？|正在筹备家庭聚会吗？
잠실 가족식사와 룸 안내|Family dining and private rooms in Jamsil|蚕室での家族のお食事・個室案内|蚕室家庭聚餐与包间指南
2–6인 룸과 7–12인 연결 룸, 메뉴별 예산과 주차 정보를 한곳에서 확인하세요.|Find private rooms for 2–6, connected rooms for 7–12, menu budgets and parking information in one place.|2〜6名の個室、7〜12名の連結個室、メニュー別の予算と駐車場の情報をまとめてご覧ください。|在此查看2–6人包间、7–12人连通包间、菜单预算及停车信息。
가족식사·룸 이용 자세히 보기 →|Family dining and room details (Korean) →|家族のお食事・個室の詳細（韓国語）→|家庭聚餐与包间详情（韩语）→
브라우저에서 영상을 재생할 수 없습니다.|Your browser cannot play this video.|お使いのブラウザでは動画を再生できません。|您的浏览器无法播放此视频。
영상 재생을 지원하지 않는 브라우저입니다.|Your browser does not support video playback.|お使いのブラウザは動画再生に対応していません。|您的浏览器不支持视频播放。
공간 영상 보기|Watch the space tour video|店内紹介動画を見る|观看店内环境视频
`.trim().split(/\r?\n/).filter(line=>line.trim()).map(line=>line.split('|')).filter(row=>row[0]?.trim());
const spanish = {
"도꼭지 KT송파타워점 · 잠실역 10번 출구 인근":"DOKKOKJI KT Songpa Tower · Cerca de la salida 10 de la estación Jamsil",
"서울 송파구 잠실로 209, KT송파타워 2층 · 길찾기":"209 Jamsil-ro, Songpa-gu, Seúl · KT Songpa Tower, segunda planta · Cómo llegar",
"잠실 한식 가족식사: 룸 인원과 이용료 보기 →":"Comidas familiares: capacidad y tarifas de las salas (en coreano) →",
  "영상 재생을 지원하지 않는 브라우저입니다.": "Su navegador no permite reproducir este vídeo.",
  "브라우저에서 영상을 재생할 수 없습니다.": "Su navegador no permite reproducir este vídeo.",
  "공간 영상 보기": "Ver vídeo de los espacios",
  "본문으로 바로가기": "Saltar al contenido",
  "도꼭지": "DOKKOKJI",
  "메뉴": "Carta",
  "공간": "Espacios",
  "오시는 길": "Cómo llegar",
  "예약 안내": "Reservas",
  "룸 안내": "Salas privadas",
  "잠실 한식 · 솥밥과 생선구이": "Cocina coreana en Jamsil · Arroz en olla y pescado a la parrilla",
  "한국의": "Sabores de",
  "요리 체험,": "Corea,",
  "도꼭지.": "DOKKOKJI.",
  "도미를 올린 솥밥, 불 위에서 구워낸 금태.": "Arroz en olla con dorada y perca de garganta negra a la parrilla. ",
  "따뜻한 밥과 생선으로 차리는 한 상.": "Arroz recién hecho y pescado para compartir la mesa.",
  "도꼭지의 메뉴": "Descubra nuestra carta",
  "따뜻한 솥 하나에 담은 한 끼": "Una comida reconfortante en cada olla",
  "도미솥밥 · 금태구이 전문": "Arroz con dorada · Perca de garganta negra a la parrilla",
  "룸 2–12인": "Salas privadas para 2–12 personas",
  "주차 2시간 무료": "2 horas de aparcamiento gratuito",
  "도꼭지의 한 상": "En nuestra mesa",
  "도미와 금태,": "Dorada, perca de garganta negra",
  "그리고 갓 지은 밥.": "y arroz recién hecho.",
  "도미·전복·금태를 담은 솥밥부터": "Arroz en olla con dorada, abulón o perca de garganta negra,",
  "생선구이와 계절솥밥을 곁들인 식사까지.": "o pescado a la parrilla con arroz de verduras de temporada.",
  "솥밥에는 프랑스산 이즈니버터와": "Servimos el arroz con mantequilla francesa Isigny",
  "직접 구운 곱창김을 함께 내어드립니다.": "y algas coreanas tostadas en nuestra cocina.",
  "솥밥과 생선구이 메뉴·가격": "Sotbap y pescado a la parrilla: menú y precios",
  "솥밥과 생선구이,": "Arroz en olla y pescado a la parrilla,",
  "취향에 맞게 골라보세요.": "elija su combinación favorita.",
  "도미솥밥": "Arroz en olla con dorada",
  "금태솥밥": "Arroz en olla con perca de garganta negra",
  "전복솥밥": "Arroz en olla con abulón",
  "도미전복솥밥": "Arroz en olla con dorada y abulón",
  "계절솥밥": "Arroz en olla con verduras de temporada",
  "29,000원": "29.000 KRW",
  "43,000원": "43.000 KRW",
  "도미와 갓 지은 밥이 어우러지는 한 솥.": "Dorada y arroz recién hecho, preparados en una misma olla.",
  "노릇하게 구운 금태를 올린 솥밥. 수량 한정.": "Arroz coronado con perca de garganta negra a la parrilla. Unidades limitadas.",
  "전복의 풍미를 담아낸 따뜻한 한 솥.": "Arroz caliente con el delicado sabor del abulón.",
  "식사메뉴와 함께": "Como acompañamiento de los menús",
  "생선구이와 제육볶음 등에 곁들이는 계절솥밥.": "Arroz de temporada para acompañar pescado a la parrilla, cerdo picante y otros platos.",
  "도꼭지의 솥밥에는 프랑스산 이즈니버터와 직접 구운 곱창김이 제공됩니다.": "El arroz en olla se sirve con mantequilla francesa Isigny y algas coreanas tostadas en nuestra cocina.",
  "버터는 2인에 1개 제공되며, 추가 시 1개당 1,000원입니다.": "Incluimos una porción de mantequilla por cada dos personas. Cada porción adicional cuesta 1.000 KRW.",
  "메뉴판 원본 보기": "Ver la carta original en coreano",
  "(새 창)": "(nueva pestaña)",
  "대표 솥밥": "Arroces de la casa",
  "식사": "Menús",
  "2인 한상": "Menús para dos",
  "일품": "A la carta",
  "추가": "Extras",
  "수량 한정": "Unidades limitadas",
  "구이와 식사": "Parrilla y menús",
  "고등어구이 + 계절솥밥": "Caballa a la parrilla + arroz de temporada",
  "대삼치구이 + 계절솥밥": "Carite grande a la parrilla + arroz de temporada",
  "명란구이 + 계절솥밥": "Huevas de abadejo a la parrilla + arroz de temporada",
  "제육볶음 + 계절솥밥": "Cerdo salteado picante + arroz de temporada",
  "국내산 갈치구이 + 계절솥밥": "Pez sable de Corea a la parrilla + arroz de temporada",
  "낙지볶음 + 계절솥밥": "Pulpo salteado picante + arroz de temporada",
  "둘이 나누는 한 상": "Una mesa para dos",
  "금태구이·제육 한상": "Menú de perca a la parrilla y cerdo picante",
  "금태구이·낙지 한상": "Menú de perca a la parrilla y pulpo picante",
  "금태구이 1미 + 제육볶음 + 계절솥밥 2개": "1 perca entera a la parrilla + cerdo picante + 2 arroces de temporada",
  "금태구이 1미 + 낙지볶음 + 계절솥밥 2개": "1 perca entera a la parrilla + pulpo picante + 2 arroces de temporada",
  "일품요리": "Platos a la carta",
  "계절회 5종 A / B": "Sashimi de temporada, 5 variedades A / B",
  "저녁 · 수량 한정": "Solo en la cena · Unidades limitadas",
  "국내산갈치 매콤한조림": "Pez sable de Corea guisado en salsa picante",
  "도미머리조림": "Cabeza de dorada guisada",
  "금태구이": "Perca de garganta negra a la parrilla",
  "일품메뉴에는 솥밥이 포함되지 않습니다.": "Los platos a la carta no incluyen arroz en olla.",
  "추가 메뉴 · 솥밥 변경": "Extras y cambios de arroz",
  "고등어구이": "Caballa a la parrilla",
  "대삼치구이": "Carite grande a la parrilla",
  "국내산 갈치구이": "Pez sable de Corea a la parrilla",
  "제주은갈치·목포먹갈치": "Pez sable de Jeju o Mokpo",
  "명란구이": "Huevas de abadejo a la parrilla",
  "낙지볶음": "Pulpo salteado picante",
  "제육볶음": "Cerdo salteado picante",
  "추가메뉴는 대표·식사·일품 메뉴 주문 후 이용하실 수 있습니다.": "Los extras están disponibles al pedir un arroz de la casa, un menú o un plato a la carta.",
  "갈치·낙지·금태한상 솥밥 변경: 전복·도미 +15,000원 / 도미전복 +19,000원 / 금태 +30,000원": "Cambio de arroz en los menús de pez sable, pulpo y perca: abulón o dorada +15.000 KRW / dorada y abulón +19.000 KRW / perca +30.000 KRW",
  "가격 단위: 원": "Todos los precios en wones coreanos (KRW)",
  "주방에서 식탁까지": "De la cocina a la mesa",
  "한 솥을 완성하고,": "Preparamos cada olla,",
  "한 상을 차립니다.": "servimos cada mesa.",
  "불 위의 금태부터 갓 완성한 솥밥까지 · 11초 · 무음": "Del pescado a la parrilla al arroz recién hecho · 11 s · Sin sonido",
  "솥밥을 준비하는 도꼭지의 주방": "Preparando arroz en nuestra cocina",
  "도꼭지의 상차림": "La mesa de DOKKOKJI",
  "따뜻한 한 솥,": "Una olla caliente,",
  "정갈한 한 상.": "una mesa cuidada.",
  "갓 지은 솥밥과 노릇하게 구운 생선,": "Arroz recién hecho y pescado dorado a la parrilla,",
  "곁들여 먹는 반찬까지.": "acompañados de pequeñas guarniciones coreanas.",
  "함께 나누는 식사의 즐거움을 담았습니다.": "Para disfrutar del placer de comer juntos.",
  "솥밥과 함께 즐기는 도꼭지의 요리": "Platos para acompañar el arroz en olla",
  "룸과 홀 둘러보기 · 15초 · 무음": "Salas privadas y comedor · 15 s · Sin sonido",
  "함께하는 공간": "Un espacio para compartir",
  "마주 앉아,": "Siéntense juntos,",
  "오롯이 함께.": "disfruten del momento.",
  "둘이 마주하는 식사부터 가족 모임까지.": "Desde una comida para dos hasta una reunión familiar.",
  "인원에 맞는 룸에서": "Elijan una sala para su grupo",
  "편안하게 식사를 나눠보세요.": "y compartan una comida con tranquilidad.",
  "개의 룸": "salas privadas",
  "이용 인원": "personas",
  "분 이용": "minutos",
  "룸 이용 안내": "Información sobre las salas privadas",
  "함께할 자리를": "Su mesa",
  "준비합니다.": "les espera.",
  "방문하실 날짜와 인원을 선택해": "Elijan la fecha y el número de personas.",
  "네이버 또는 캐치테이블에서 예약하세요.": "Reserven a través de Naver o Catchtable.",
  "네이버 예약": "Reservar en Naver",
  "캐치테이블 예약": "Reservar en Catchtable",
  "온라인 예약은 24시간 가능합니다.": "Las reservas en línea están disponibles las 24 horas.",
  "전화 예약은 매일 오전 10시부터 가능합니다.": "Las reservas por teléfono se atienden a diario desde las 10:00.",
  "룸 1개": "Una sala privada",
  "최대 6인 · 20,000원": "Hasta 6 personas · 20.000 KRW",
  "룸 1번 + 2번 연결": "Salas 1 y 2 comunicadas",
  "최대 12인 · 30,000원": "Hasta 12 personas · 30.000 KRW",
  "이용 기준": "Condiciones de uso",
  "2인부터 · 90분": "Desde 2 personas · 90 minutos",
  "룸 이용료는 식사 금액과 별도입니다.": "El uso de la sala se cobra aparte de la comida.",
  "원하시는 좌석은 예약 시 확인해 주세요.": "Confirmen sus preferencias de asiento al reservar.",
  "잠실에서 만나요": "Nos vemos en Jamsil",
  "서울 송파구 잠실로 209": "209 Jamsil-ro, Songpa-gu, Seúl",
  "KT송파타워 2층": "KT Songpa Tower, 2.ª planta",
  "서울 송파구 잠실로 209 KT송파타워 2층": "2.ª planta, KT Songpa Tower, 209 Jamsil-ro, Songpa-gu, Seúl",
  "영업시간": "Horario",
  "일요일–목요일": "Domingo a jueves",
  "금요일·토요일": "Viernes y sábado",
  "브레이크타임": "Pausa del servicio",
  "매일 15:00–17:00": "Todos los días, 15:00–17:00",
  "라스트오더": "Último pedido",
  "일–목 20:40 / 금·토 21:00": "Dom–jue 20:40 / vie–sáb 21:00",
  "설날·추석 전날과 당일 휴무": "Cerrado el día del Año Nuevo lunar coreano y de Chuseok, y la víspera de ambos.",
  "공휴일 영업시간은 예약 시 확인해 주세요.": "Confirmen el horario de los días festivos al reservar.",
  "KT송파타워": "KT Songpa Tower",
  "지도 보기": "Ver mapa",
  "주소 복사": "Copiar dirección",
  "한국의 요리 체험, 도꼭지.": "Sabores de Corea en DOKKOKJI.",
  "메뉴 보기": "Ver carta",
  "온라인 예약": "Reservar en línea",
  "잠실 한식당 도꼭지는 KT송파타워 2층에서 솥밥과 생선구이를 준비합니다.": "Servimos cocina coreana, con arroz en olla y pescado a la parrilla como especialidades, en la segunda planta de KT Songpa Tower, en Jamsil, Seúl.",
  "방문 전 자주 묻는 질문": "Preguntas antes de su visita",
  "방문 전 안내": "Antes de su visita",
  "자주 묻는 질문": "Preguntas frecuentes",
  "메뉴부터 룸 예약, 주차까지.": "Carta, salas privadas y aparcamiento.",
  "방문에 필요한 정보를 모았습니다.": "Todo lo necesario para preparar su visita.",
  "도꼭지의 대표 메뉴는 무엇인가요?": "¿Cuáles son sus especialidades?",
  "도미솥밥과 전복솥밥은 각각 29,000원, 금태솥밥은 43,000원입니다. 금태솥밥은 수량 한정으로 준비합니다. 고등어·대삼치·갈치 등 생선구이와 계절솥밥을 함께 즐기는 식사 메뉴도 있습니다.": "El arroz con dorada y el arroz con abulón cuestan 29.000 KRW cada uno. El arroz con perca de garganta negra cuesta 43.000 KRW y se sirve en cantidades limitadas. También ofrecemos menús de caballa, carite o pez sable a la parrilla con arroz de temporada.",
  "전체 메뉴와 가격 보기": "Ver toda la carta y los precios",
  "룸은 몇 명까지 이용할 수 있나요?": "¿Cuántas personas caben en una sala privada?",
  "룸은 2인부터 이용할 수 있으며, 룸 1개는 최대 6인까지 가능합니다. 룸 1번과 2번을 연결하면 최대 12인까지 함께 식사할 수 있습니다. 원하시는 날짜와 인원의 룸 이용 가능 여부는 예약 시 확인해 주세요.": "Las salas privadas admiten de 2 a 6 personas. Las salas 1 y 2 pueden comunicarse para reunir hasta 12 personas. Confirmen la disponibilidad para la fecha y el tamaño de su grupo al reservar.",
  "룸 이용료와 이용 시간은 어떻게 되나요?": "¿Cuánto cuesta una sala y cuánto tiempo se puede utilizar?",
  "룸 1개는 20,000원, 룸 1번과 2번 연결은 30,000원이며 식사 금액과 별도입니다. 룸은 2인부터 이용 가능하고 이용 시간은 90분입니다.": "Una sala cuesta 20.000 KRW; las salas 1 y 2 comunicadas cuestan 30.000 KRW. Este importe se cobra aparte de la comida. El mínimo es de 2 personas y el tiempo de uso es de 90 minutos.",
  "예약은 어디에서 할 수 있나요?": "¿Cómo puedo reservar?",
  "네이버 예약과 캐치테이블에서 날짜와 인원을 선택해 예약할 수 있습니다. 온라인 예약은 24시간, 전화 예약은 매일 오전 10시부터 가능합니다.": "Elijan la fecha y el número de personas en Naver Booking o Catchtable. Pueden reservar en línea las 24 horas y por teléfono a diario desde las 10:00.",
  "예약 방법 보기": "Ver opciones de reserva",
  "매장 위치와 주차 안내가 궁금해요.": "¿Dónde están y hay aparcamiento?",
  "도꼭지는 서울 송파구 잠실로 209, KT송파타워 2층에 있습니다. KT송파타워 주차장을 이용하시면 주차 2시간을 무료로 제공합니다.": "Estamos en la segunda planta de KT Songpa Tower, 209 Jamsil-ro, Songpa-gu, Seúl. El aparcamiento de KT Songpa Tower ofrece 2 horas gratuitas.",
  "위치와 지도 보기": "Ver ubicación y mapa",
  "영업시간과 브레이크타임은 언제인가요?": "¿Cuál es el horario y la pausa del servicio?",
  "일요일부터 목요일은 11:00–21:20, 금요일과 토요일은 11:00–22:00에 운영합니다. 브레이크타임은 매일 15:00–17:00입니다. 라스트오더는 일–목 20:40, 금·토 21:00이며, 공휴일 영업시간은 예약 시 확인해 주세요.": "Abrimos de domingo a jueves de 11:00 a 21:20, y viernes y sábado de 11:00 a 22:00. La pausa diaria es de 15:00 a 17:00. El último pedido es a las 20:40 de domingo a jueves y a las 21:00 viernes y sábado. Confirmen el horario de los días festivos al reservar.",
  "잠실에서 만나는": "En Jamsil,",
  "도미·전복솥밥 각 29,000원": "Arroz con dorada o abulón · 29.000 KRW cada uno",
  "2–12인 룸 · 주차 2시간 무료": "Salas para 2–12 personas · 2 horas de aparcamiento gratuito",
  "예약 신청 후 각 예약 서비스의 확정 알림을 확인해 주세요.": "Después de solicitar la reserva, comprueben la notificación de confirmación del servicio utilizado.",
  "7–12인 연결 룸은 전화로 이용 가능 여부를 문의해 주세요.": "Para las salas comunicadas de 7–12 personas, llamen para consultar la disponibilidad.",
  "전화 문의": "Llámenos",
  "잠실역 10번 출구 인근, 송파구청 옆 KT송파타워(소피텔 건물) 2층입니다.": "Estamos cerca de la salida 10 de la estación de Jamsil, en la segunda planta de KT Songpa Tower (edificio Sofitel), junto a la oficina del distrito de Songpa-gu.",
  "지하 3·4층": "Plantas subterráneas B3 y B4",
  "네이버에서 매장·리뷰 보기": "Ver el restaurante y las opiniones en Naver",
  "캐치테이블에서 매장·리뷰 보기": "Ver el restaurante y las opiniones en Catchtable",
  "네이버 예약과 캐치테이블에서 날짜와 인원을 선택해 예약할 수 있습니다. 온라인 예약은 24시간, 전화 예약은 매일 오전 10시부터 가능합니다. 예약 신청 후 각 예약 서비스의 확정 알림을 확인해 주세요. 7–12인 연결 룸은 전화로 이용 가능 여부를 문의해 주세요. 전화 문의: 02-422-0431.": "Elijan la fecha y el número de personas en Naver Booking o Catchtable. Comprueben la notificación de confirmación tras solicitar la reserva. Las reservas en línea están disponibles las 24 horas; por teléfono, a diario desde las 10:00. Para salas comunicadas de 7–12 personas, llamen al +82-2-422-0431 para consultar la disponibilidad.",
  "가족 모임을 준비하시나요?": "¿Organizan una reunión familiar?",
  "잠실 가족식사와 룸 안내": "Comidas familiares y salas privadas en Jamsil",
  "2–6인 룸과 7–12인 연결 룸, 메뉴별 예산과 주차 정보를 한곳에서 확인하세요.": "Consulten las salas para 2–6 personas, las salas comunicadas para 7–12, los precios y el aparcamiento.",
  "가족식사·룸 이용 자세히 보기 →": "Más información sobre comidas familiares y salas →",
  "메뉴와 가격": "Carta y precios",
  "/ 가족식사와 룸 안내": "/ Comidas familiares y salas privadas",
  "잠실 가족식사 · 룸 안내": "Comidas familiares en Jamsil · Salas privadas",
  "가족이 모이는 날,": "Cuando la familia se reúne,",
  "따뜻한 솥밥 한 상.": "una mesa con arroz recién hecho.",
  "부모님과의 식사, 가족의 생일, 오랜만의 모임.": "Una comida con sus padres, un cumpleaños o un esperado reencuentro.",
  "도꼭지의 메뉴와 공간을 살펴보고 인원에 맞는 자리를 준비하세요.": "Descubran la carta y los espacios de DOKKOKJI y elijan una mesa para su grupo.",
  "잠실역 10번 출구 인근, 송파구청 옆": "Cerca de la salida 10 de la estación de Jamsil, junto a la oficina de Songpa-gu,",
  "KT송파타워(소피텔 건물) 2층에 있습니다.": "en la segunda planta de KT Songpa Tower (edificio Sofitel).",
  "인원별 룸 안내": "Salas según el tamaño del grupo",
  "함께 앉을 자리": "Una mesa para todos",
  "2인부터 12인까지, 인원에 맞춰": "De 2 a 12 personas, según su grupo",
  "2–6인: 룸 1개": "2–6 personas: una sala privada",
  "룸 1개는 최대 6인, 2인부터 이용할 수 있습니다. 이용료는": "Cada sala admite de 2 a 6 personas. El precio es de",
  "20,000원": "20.000 KRW",
  "이며 식사 금액과 별도입니다.": "y se cobra aparte de la comida.",
  "7–12인: 연결 룸": "7–12 personas: salas comunicadas",
  "룸 1번과 2번을 연결하면 최대 12인까지 가능합니다. 연결 룸 이용료는": "Las salas 1 y 2 pueden comunicarse para reunir hasta 12 personas. El precio conjunto es de",
  "30,000원": "30.000 KRW",
  "입니다. 7–12인 모임은 전화로 이용 가능 여부를 문의해 주세요.": ". Para grupos de 7–12 personas, llamen para consultar la disponibilidad.",
  "룸 이용 시간은 90분입니다. 날짜·시간·좌석별 이용 가능 여부는 예약 시 확인해 주세요.": "El tiempo de uso de las salas es de 90 minutos. Confirmen la disponibilidad de fecha, hora y asientos al reservar.",
  "식사를 고르실 때": "Al elegir su comida",
  "솥밥과 생선구이, 메뉴와 예산": "Arroz en olla y pescado a la parrilla: carta y precios",
  "각자 취향에 따라 도미·전복·금태 솥밥을 고르거나, 생선구이와 계절솥밥을 함께 즐길 수 있습니다. 아래는 대표 메뉴이며 전체 메뉴는 홈페이지에서 확인하실 수 있습니다.": "Elijan arroz con dorada, abulón o perca de garganta negra, o pescado a la parrilla con arroz de temporada. A continuación se muestran algunas especialidades; la carta completa está en la página principal.",
  "도미솥밥 · 전복솥밥": "Arroz con dorada · Arroz con abulón",
  "각 29,000원": "29.000 KRW cada uno",
  "35,000원": "35.000 KRW",
  "예산 예시: 4명이 도미솥밥을 1개씩 주문하고 룸 1개를 이용하면 식사 116,000원 + 룸 20,000원 = 136,000원입니다. 추가 메뉴·음료는 별도입니다.": "Ejemplo de presupuesto: para 4 personas, un arroz con dorada por persona y una sala privada cuestan 116.000 KRW de comida + 20.000 KRW de sala = 136.000 KRW. Los extras y las bebidas se cobran aparte.",
  "전체 메뉴와 가격 보기 →": "Ver toda la carta y los precios →",
  "방문 전에": "Antes de venir",
  "위치·주차·영업시간": "Ubicación, aparcamiento y horario",
  "찾아오시는 길": "Cómo llegar",
  "건물 지하 3·4층 주차장 이용 시 주차 2시간 무료입니다.": "Disponen de 2 horas gratuitas en el aparcamiento de las plantas subterráneas B3 y B4 del edificio.",
  "네이버에서 위치 확인 (새 창) →": "Ver ubicación en Naver (nueva pestaña) →",
  "식사 시간": "Horario de comidas",
  "일–목 11:00–21:20 / 금·토 11:00–22:00": "Dom–jue 11:00–21:20 / vie–sáb 11:00–22:00",
  "브레이크타임 매일 15:00–17:00": "Pausa diaria 15:00–17:00",
  "라스트오더 일–목 20:40 / 금·토 21:00": "Último pedido: dom–jue 20:40 / vie–sáb 21:00",
  "설날·추석 전날과 당일 휴무입니다. 공휴일 영업시간은 예약 시 확인해 주세요.": "Cerrado el día del Año Nuevo lunar coreano y de Chuseok, y la víspera de ambos. Confirmen el horario de los días festivos al reservar.",
  "가족식사 예약": "Reservas para comidas familiares",
  "날짜와 인원을 정하셨나요?": "¿Ya tienen fecha y número de personas?",
  "방문 날짜·시간·인원과 홀 또는 룸을 정해 주세요.": "Elijan fecha, hora, número de personas y mesa en el comedor o sala privada.",
  "예약 서비스에서 이용 가능한 좌석과 취소 조건을 확인해 주세요.": "Consulten los asientos disponibles y las condiciones de cancelación en el servicio de reservas.",
  "예약 신청 후 해당 서비스의 확정 알림을 확인해 주세요.": "Tras solicitar la reserva, comprueben la notificación de confirmación del servicio.",
  "온라인 예약은 24시간 가능합니다. 7–12인 연결 룸 또는 자세한 문의는 매일 오전 10시부터 전화로 안내합니다.": "Pueden reservar en línea las 24 horas. Para salas comunicadas de 7–12 personas y otras consultas, atendemos por teléfono a diario desde las 10:00.",
  "네이버 예약 (새 창)": "Reservar en Naver (nueva pestaña)",
  "캐치테이블 (새 창)": "Catchtable (nueva pestaña)",
  "전화 02-422-0431": "Llamar al +82-2-422-0431",
  "룸 1개 이용료는 20,000원, 룸 1번과 2번을 연결하면 30,000원입니다. 룸 이용료는 식사 금액과 별도이며, 이용 시간은 90분입니다.": "Una sala cuesta 20.000 KRW; las salas 1 y 2 comunicadas cuestan 30.000 KRW. El uso de la sala se cobra aparte de la comida y dura 90 minutos.",
  "멤버십": "Membresía",
  "다시 찾는 즐거움, 도꼭지 멤버스": "Más motivos para volver a DOKKOKJI",
  "따뜻한 한 끼와 함께, 소중한 날도 기억하겠습니다.": "Una buena comida y un recuerdo para sus días especiales.",
  "매장에서 회원가입": "Regístrese al visitar el restaurante",
  "매장 방문 시 QR을 열고 휴대폰 번호를 입력해 주세요. 기존 회원은 체크인, 처음 방문하신 분은 가입으로 안내됩니다.": "Durante su visita, abra el enlace QR del local e introduzca su número de móvil. Los socios acceden al registro de visita y los nuevos clientes al formulario de alta.",
  "회원정보 입력": "Introduzca sus datos",
  "성함과 생일을 입력하고 가입 안내를 확인해 주세요. 광고성 정보 수신동의는 선택입니다.": "Introduzca su nombre y cumpleaños y revise las condiciones. El consentimiento para mensajes promocionales es opcional.",
  "마지막으로 카카오톡 채널 추가": "Por último, añada nuestro canal de KakaoTalk",
  "생일 혜택 안내를 받으시려면 도꼭지 카카오톡 채널을 꼭 추가해 주세요.": "Añada el canal de DOKKOKJI en KakaoTalk para recibir por este medio información sobre los beneficios de cumpleaños.",
  "가입만으로 생일 초대권이 즉시 발급되지는 않습니다. 혜택 대상과 제공 시점은 매장에서 확인해 주세요.": "El registro no genera un vale de cumpleaños inmediato. Consulte con el personal las condiciones y la fecha de entrega.",
  "매장 방문 시 가입·체크인": "Registro y check-in durante su visita",
  "가입 화면은 한국어로 제공됩니다. 휴대폰 번호 입력이 어려우시면 직원에게 문의해 주세요.": "El formulario está en coreano. Si necesita ayuda para introducir su número de móvil, consulte con el personal.",
  "카카오톡 채널 보기": "Ver el canal de KakaoTalk"
};
Object.assign(spanish, {
  "도꼭지 잠실점": "DOKKOKJI Jamsil",
  "솥밥과 생선구이로": "Arroz en olla y pescado a la parrilla,",
  "차리는 한 상.": "servidos en una misma mesa.",
  "잠실점 · KT송파타워 2층 · 잠실역 10번 출구 인근": "Jamsil · KT Songpa Tower, 2.ª planta · Cerca de la salida 10 de Jamsil",
  "잠실점 예약 안내": "Reservas en Jamsil",
  "잠실점 예약": "Reservar en Jamsil",
  "잠실점 예약 안내 →": "Reservas en Jamsil →",
  "카카오채널 추가": "Añadir nuestro canal de KakaoTalk",
  "매장 소식·혜택 안내 받기": "Recibir noticias y beneficios del restaurante",
  "도꼭지 소식·혜택 안내 받기": "Recibir noticias y beneficios de DOKKOKJI",
  "메뉴를 고르셨나요?": "¿Ya han elegido sus platos?",
  "카카오채널 친구 5% 할인": "5% de descuento para amigos del canal de KakaoTalk",
  "기존·신규 카카오채널 친구는 식사금액의 5%를 할인해 드립니다.": "Los amigos actuales y nuevos del canal de KakaoTalk reciben un 5% de descuento en la comida.",
  "방문 시 채널 친구 화면을 직원에게 보여 주세요.": "Al llegar, muestren al personal la pantalla de amigos del canal.",
  "예약 1건당 1회 · 다른 할인과 중복 불가 · 별도 종료 공지 전까지": "Una vez por reserva · No acumulable con otros descuentos · Hasta nuevo aviso",
  "도꼭지의 소식을 카카오톡으로 만나보세요.": "Reciban las noticias de DOKKOKJI en KakaoTalk.",
  "기존·신규 친구 모두 5% 할인 혜택과 매장 소식을 확인하세요.": "Los amigos actuales y nuevos pueden consultar el descuento del 5% y las noticias del restaurante.",
  "도꼭지 잠실점에서 만나요": "Nos vemos en DOKKOKJI Jamsil",
  "현재 방문 및 예약은 도꼭지 잠실점(공식 매장명: 도꼭지 KT송파타워점)에서 가능합니다. 서울 송파구 잠실로 209, KT송파타워 2층에서 만나요. 마포점(서울 마포구 백범로10길 30)은 영업을 종료했습니다.": "Actualmente pueden visitarnos y reservar en DOKKOKJI Jamsil (nombre oficial: DOKKOKJI KT Songpa Tower), en la segunda planta de KT Songpa Tower, 209 Jamsil-ro, Songpa-gu, Seúl. La sede de Mapo, en 30 Baekbeom-ro 10-gil, Mapo-gu, Seúl, ha cerrado.",
  "현재 운영 매장은 어디인가요?": "¿Qué sede está abierta actualmente?",
  "잠실점 위치와 지도 보기": "Ver la ubicación y el mapa de Jamsil",
  "가족 모임을 준비하시나요?": "¿Preparan una reunión familiar?",
  "잠실 가족식사와 룸 안내": "Comidas familiares y salas privadas en Jamsil",
  "2–6인 룸과 7–12인 연결 룸, 메뉴별 예산과 주차 정보를 한곳에서 확인하세요.": "Consulten en un solo lugar las salas para 2–6 personas, las salas comunicadas para 7–12, los presupuestos y el aparcamiento.",
  "가족식사·룸 이용 자세히 보기 →": "Más información sobre comidas familiares y salas →",
  "브라우저에서 영상을 재생할 수 없습니다.": "Su navegador no puede reproducir este vídeo.",
  "영상 재생을 지원하지 않는 브라우저입니다.": "Su navegador no admite la reproducción de vídeo.",
  "공간 영상 보기": "Ver el vídeo de los espacios"
});
const missingSpanish=rows.filter(row=>!spanish[row[0]]).map(row=>row[0]);
if(missingSpanish.length)console.warn('Missing Spanish translations',missingSpanish);
const dictionary=new Map(rows.map(row=>[row[0],[...row,spanish[row[0]]||row[0]]]));
Object.entries(spanish).forEach(([key,value])=>{if(!dictionary.has(key))dictionary.set(key,[key,key,key,key,value]);});
const nodes=[]; const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
while(walker.nextNode()){const n=walker.currentNode;if(!n.parentElement.closest('script,style,.language-switch')){const key=n.textContent.trim();if(key && dictionary.has(key))nodes.push({n,original:n.textContent,key});}}
const langs=['ko','en','ja','zh','es'];
const supportedLangs=[...document.querySelectorAll('.language-switch [data-lang]')].map(b=>b.dataset.lang);
const isGuide=document.body.dataset.page==='family-guide';
const titles=['도꼭지 잠실점 | 솥밥·생선구이·룸 예약 · KT송파타워','DOKKOKJI | Korean Dining in Jamsil · Pot Rice & Grilled Fish','DOKKOKJI | 蚕室の韓国料理 · 釜飯と焼き魚','DOKKOKJI | 蚕室韩餐 · 锅饭与烤鱼','DOKKOKJI | Cocina coreana en Jamsil · Arroz en olla y pescado a la parrilla'];
if(isGuide){titles[0]=document.title;titles[4]='Comidas familiares y salas privadas en Jamsil | DOKKOKJI';}
const attributeRows = [
['도꼭지 처음으로','DOKKOKJI home','DOKKOKJI ホーム','DOKKOKJI首页'],
['주요 메뉴','Main navigation','メインナビゲーション','主导航'],
['모바일 바로가기','Mobile navigation','モバイルナビゲーション','手机导航'],
['메뉴 종류','Menu categories','メニューの種類','菜单分类'],
['도꼭지의 음식 사진','Food at DOKKOKJI','ドッコジの料理','DOKKOKJI料理'],
['금태 굽기와 솥밥, 상차림을 담은 11초 무음 영상','Grilled fish and pot rice, 11-second silent video','焼き魚と釜飯・11秒の無音動画','烤鱼与锅饭，11秒无声视频'],
['도꼭지 룸과 홀 둘러보기, 15초 무음 영상','Private rooms and dining area, 15-second silent video','個室と店内・15秒の無音動画','包间与大厅，15秒无声视频']
];
const spanishAria={"도꼭지 처음으로":"Inicio de DOKKOKJI","주요 메뉴":"Navegación principal","모바일 바로가기":"Navegación móvil","메뉴 종류":"Categorías de la carta","도꼭지의 음식 사진":"Platos de DOKKOKJI","금태 굽기와 솥밥, 상차림을 담은 11초 무음 영상":"Pescado a la parrilla y arroz en olla, vídeo de 11 segundos sin sonido","도꼭지 룸과 홀 둘러보기, 15초 무음 영상":"Salas privadas y comedor, vídeo de 15 segundos sin sonido"};
attributeRows.push(...[["Language / 언어", "Language", "言語", "语言"], ["카카오채널 친구 할인", "KakaoTalk channel friend discount", "カカオトークチャンネル友だち割引", "KakaoTalk频道好友优惠"], ["도꼭지 카카오채널", "DOKKOKJI KakaoTalk channel", "DOKKOKJIカカオトークチャンネル", "DOKKOKJI的KakaoTalk频道"], ["잠실점 방문 및 마포점 영업 종료 안내", "Jamsil visits and Mapo closure information", "蚕室店のご案内・麻浦店閉店のお知らせ", "蚕室店到访及麻浦店停业说明"]]);
Object.assign(spanishAria,{"Language / 언어": "Idioma", "카카오채널 친구 할인": "Descuento para amigos del canal de KakaoTalk", "도꼭지 카카오채널": "Canal de KakaoTalk de DOKKOKJI", "잠실점 방문 및 마포점 영업 종료 안내": "Visitas a Jamsil y cierre de Mapo"});
const attrMap=new Map(attributeRows.map(r=>[r[0],[...r,spanishAria[r[0]]]]));
const attributes=[...document.querySelectorAll('[aria-label]')].filter(el=>attrMap.has(el.getAttribute('aria-label'))).map(el=>({el,key:el.getAttribute('aria-label')}));
const imageLabels=[
['hero-optimized.jpg','Pot rice, grilled fish and side dishes','釜飯と焼き魚、おかずの食卓','锅饭、烤鱼与小菜'],
['logo.png','DOKKOKJI logo','ドッコジのロゴ','DOKKOKJI标志'],
['rice-domi-optimized.jpg','Sea bream pot rice','鯛の釜飯','鲷鱼锅饭'],
['rice-geumtae-optimized.jpg','Blackthroat seaperch pot rice','のどぐろの釜飯','赤鯥锅饭'],
['rice-abalone-optimized.jpg','Abalone pot rice','あわびの釜飯','鲍鱼锅饭'],
['rice-seasonal-optimized.jpg','Seasonal vegetable pot rice','季節の野菜釜飯','时令蔬菜锅饭'],
['kitchen-at-work-clean-v2-optimized.jpg','Cooks preparing pot rice','釜飯を準備する厨房','准备锅饭的厨房'],
['table-detail-optimized.jpg','Fish dishes and side dishes at DOKKOKJI','ドッコジの魚料理とおかず','DOKKOKJI鱼料理与小菜'],
['room-connected-optimized.jpg','Connected private dining rooms','連結した個室','连通包间'],
['entrance-wide-clean-optimized.jpg','DOKKOKJI entrance and sign','ドッコジの入口と看板','DOKKOKJI入口与招牌']
];
const spanishImages={"hero-optimized.jpg":"Arroz en olla, pescado a la parrilla y guarniciones de DOKKOKJI","logo.png":"Logotipo de DOKKOKJI","rice-domi-optimized.jpg":"Arroz en olla con dorada","rice-geumtae-optimized.jpg":"Arroz en olla con perca de garganta negra","rice-abalone-optimized.jpg":"Arroz en olla con abulón","rice-seasonal-optimized.jpg":"Arroz en olla con verduras de temporada","kitchen-at-work-clean-v2-optimized.jpg":"Cocineros preparando arroz en olla","table-detail-optimized.jpg":"Platos de pescado y guarniciones de DOKKOKJI","room-connected-optimized.jpg":"Salas privadas comunicadas","entrance-wide-clean-optimized.jpg":"Entrada y letrero de DOKKOKJI","hero-960.jpg":"Arroz en olla, pescado a la parrilla y guarniciones de DOKKOKJI","room-connected-960.jpg":"Salas privadas comunicadas con una mesa larga"};
imageLabels.forEach(r=>r.push(spanishImages[r[0]]));
for(const file of ['hero-960.jpg','room-connected-960.jpg'])imageLabels.push([file,'','','',spanishImages[file]]);
const metadata=[...document.querySelectorAll('meta[name="description"],meta[property="og:description"],meta[property="og:title"],meta[property="og:locale"]')].map(el=>({el,original:el.content}));
const siteLinks=[...document.querySelectorAll('a[href^="/"]')].filter(el=>['/','/family-dining'].includes(new URL(el.href).pathname)).map(el=>({el,original:el.getAttribute('href')}));
const images=[...document.images].map(el=>({el,original:el.alt,row:imageLabels.find(r=>el.getAttribute('src').endsWith(r[0]))}));
window.siteLanguage='ko';
function setLanguage(lang){
if(!langs.includes(lang)||!supportedLangs.includes(lang))lang='ko';
if(lang==='es'){location.replace((isGuide?'/es/family-dining':'/es')+location.hash);return;}
const index=langs.indexOf(lang);
nodes.forEach(({n,original,key})=>{const translated=dictionary.get(key)?.[index];n.textContent=index && typeof translated==='string' && translated.trim()?original.replace(key,()=>translated):original;});
attributes.forEach(({el,key})=>el.setAttribute("aria-label",attrMap.get(key)[index])); images.forEach(({el,original,row})=>{if(row)el.alt=index?row[index]:original;}); document.documentElement.lang=lang==='zh'?'zh-Hans':lang;window.siteLanguage=lang;document.title=titles[index];
document.querySelectorAll('.language-switch button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lang===lang)));
const bookingNote=document.getElementById('booking-language-note');
if(bookingNote)bookingNote.textContent=['','The booking service may use a different language.','予約サイトの表示言語は異なる場合があります。','预约平台的显示语言可能不同。','El servicio de reservas puede mostrarse en otro idioma.'][index];
const copyStatus=document.getElementById('copy-status');if(copyStatus)copyStatus.textContent='';
metadata.forEach(({el,original})=>{
  const kind=el.getAttribute('property');
  const descriptions={en:'DOKKOKJI in Jamsil, Seoul: pot rice, grilled fish and private rooms for 2–12 guests. Menu, prices and reservations.',ja:'ソウル・蚕室のDOKKOKJI。釜飯と焼き魚、2〜12名の個室。メニュー・料金・ご予約をご案内します。',zh:'首尔蚕室DOKKOKJI：锅饭、烤鱼及2–12人包间。查看菜单、价格和预约指南。'};
  el.content=lang==='ko'?original:kind==='og:locale'?({en:'en_US',ja:'ja_JP',zh:'zh_CN'})[lang]:kind==='og:title'?titles[index]:descriptions[lang];
});
siteLinks.forEach(({el,original})=>{if(lang==='ko'){el.setAttribute('href',original);return;}const target=new URL(original,location.href);target.searchParams.set('lang',lang);el.setAttribute('href',target.pathname+target.search+target.hash);});
try{localStorage.setItem('dokkokji-language',lang);}catch{}
const url=new URL(location.href);if(lang==='ko')url.searchParams.delete('lang');else url.searchParams.set('lang',lang);history.replaceState(null,'',url);
}
document.querySelectorAll('.language-switch button').forEach(b=>b.addEventListener('click',()=>setLanguage(b.dataset.lang)));
let saved='ko';try{saved=localStorage.getItem('dokkokji-language')||'ko';}catch{}
setLanguage(new URL(location.href).searchParams.get('lang')||(saved==='es'?'ko':saved));
})();
