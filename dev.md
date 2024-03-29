## 日期固定节日

```javascript
constantData: {
    l1: {
        d0101: '元旦',
        d0214: '情人节',
        d0308: '妇女节|1909',
        d0312: '植树节|1979',
        d0315: '消费者权益日|1983',
        d0401: '愚人节',
        d0501: '劳动节|1890',
        d0504: '五四青年节|1949',
        d0601: '儿童节|1949',
        d0701: '建党节|1921',
        d0801: '建军节|1933',
        d0910: '教师节|1985',
        d1001: '国庆节|1949',
        d1225: '圣诞节'
    },
    l2: {
        d0126: '国际海关日|1983',
        d0202: '世界湿地日|1997',
        d0204: '世界抗癌症日|2000',
        d0207: '国际声援南非日|1964',
        d0210: '国际气象节|1991',
        d0221: '国际母语日|2000',
        d0224: '第三世界青年日|1975',
        d0301: '国际海豹日|1983',
        d0302: '全国爱耳日|1999',
        d0305: '学雷锋纪念日|1963',
        d0311: '国际尊严尊敬日|1999',
        d0317: '国际航海日|1978',
        d0320: '世界无肉日|1985',
        d0321: [
            '世界林业节|1971',
            '世界睡眠日|2001',
            '世界儿歌日|1976',
            '世界诗歌日|1999',
            '世界唐氏综合症|2012',
            '国际消除种族歧视日|1966'
        ],
        d0322: '世界水日|1993',
        d0323: '世界气象日|1950',
        d0324: '世界防治结核病日|1995',
        d0402: '国际儿童图书日|1967',
        d0407: '世界卫生日|1950',
        d0411: '世界帕金森病日|1997',
        d0422: '世界地球日|2009',
        d0423: '世界读书日|1995',
        d0426: '世界知识产权日|2001',
        d0508: '世界红十字日|1948',
        d0512: '国际护士节|1912',
        d0515: '国际家庭日|1994',
        d0517: '世界电信日|1969',
        d0518: '国际博物馆日|1977',
        d0520: [
            '全国学生营养日|2001',
            '全国母乳喂养宣传日|1990'
            ],
        d0522: '国际生物多样性日|2001',
        d0531: '世界无烟日|1989',
        d0605: '世界环境日|1972',
        d0606: '全国爱眼日|1996',
        d0617: '世界防治荒漠化和干旱日|1995',
        d0620: '世界难民日|2001',
        d0623: '国际奥林匹克日|1894',
        d0625: '全国土地日|1991',
        d0626: [
            '国际禁毒日|1988',
            '联合国宪章日|1945'
            ],
        d0701: '香港回归纪念日|1997',
        d0711: '世界人口日|1990',
        d0903: '抗战胜利纪念日|2014',
        d0908: '国际扫盲日|1965',
        d0910: '世界预防自杀日|2003',
        d0916: '国际臭氧层保护日|1995',
        d0921: '国际和平日|2002',
        d0927: '世界旅游日|1979',
        d0929: '全国爱牙日|1989',
        d1001: '国际音乐日|1979',
        d1004: '世界动物日|1931',
        d1008: '全国高血压日|1998',
        d1009: '世界邮政日|1969',
        d1010: '世界精神卫生日|1991',
        d1015: '国际盲人节|1984',
        d1016: '世界粮食节|1981',
        d1017: '国际消除贫困日|1993',
        d1022: '世界传统医药日|1991',
        d1024: '联合国日|1947',
        d1025: '人类天花绝迹日|1979',
        d1108: '中国记者日|2000',
        d1109: '消防宣传日|1992',
        d1114: '联合国糖尿病日|1991',
        d1117: '国际大学生节|1946',
        d1201: '世界艾滋病日|1988',
        d1203: '国际残疾人日|1992',
        d1209: '世界足球日|1863',
        d1213: '南京大屠杀死难者国家公祭日|1994',
        d1215: '世界强化免疫日|1988',
        d1220: '澳门回归纪念日|1999',
        d1221: '国际篮球日|1891'
    }
}
```

## 日期不固定节日
```javascript
dynamicData: {

    l1: [
        '0520-母亲节',  // 第1-2位代表月份, 第3位表示第n个星期, 第4位表示星期几, 0代表周日
        '0630-父亲节'
    ],
    l2: [
        '0512-世界哮喘日-2000', // 时间规则-节日名称-起始年份
        '0530-全国助残日-1991',
        '0626-中国文化遗产日-2006',
        '0716-国际合作节-1995',
        '0940-国际聋人节-1958',
        '1011-世界住房日-1986',
        '1024-世界视觉日-2000',
        '1023-国际减灾日-2009'
    ]

}
```