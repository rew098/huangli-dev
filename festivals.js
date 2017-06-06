/**
 * @file        festivals.js
 * @author      rew098
*/
/*
    结果数据格式

    {
        l1: '教师节',
        l2: '世界预防自杀日'
    }

    暴露方法

    get 查询节日

*/
var festivals = {

    // 日期计算缓存
    cache: {},

    // 固定节日
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
    },

    // 日期不固定节日
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

    },

    // 闰年判断
    isLeapYear: function(y) {

        if (((y % 4 === 0) && (y % 100 !== 0)) || (y % 400 === 0)) {

            return true;

        } else {

            return false;
        }

    },
    
    /**
     * 补零
     * @param n {Number} 数字
     */ 
    modifier: function(n) {

        if (n < 10) {

            return '0' + n;

        } else {

            return n;

        }

    },

    /**
     * 节日查询
     * @param y {Number} 年
     * @param m {Number} 月
     * @param d {Number} 日 
     */
    get: function(y, m, d) {

        var result = {
            l1: '',
            l2: ''
        }

        var k = 'd' + this.modifier(m) + this.modifier(d); // 补零

        // 是否有缓存
        if (!this.cache[y]) {

            this.cache[y] = {};
            this.specialCasesHandler(y);
            this.dynamicDataHandler(y);

        }
        
        result.l1 = this.find(y, 'l1', k);
        result.l2 = this.find(y, 'l2', k);

        return result;
    
    },

    /**
     * 查找
     * @param key {string} l1 l2
     * @param subkey {string} 键
     */ 
    find: function(y, key, subkey) {

        var value = '';
        var consData = this.constantData;
        var cacheData = this.cache;

        function valueFilter(data, year) {

            var result = '';

            if (data instanceof Array) {

                var tmpArray = [];

                for(var i = 0, len = data.length; i < len; i++) {

                    var startYear = data[i].split('|')[1];

                    if (!startYear || (+startYear <= year)) {

                        tmpArray.push(data[i].split('|')[0]);

                    }

                }

                if (tmpArray.length <= 1) {

                    result = tmpArray.join();

                } else {

                    result = tmpArray;

                }


            } else {

                var startYear = data.split('|')[1];

                if (!startYear || (+startYear <= year)) {

                    result = data.split('|')[0];

                }
            }

            return result;
        }

        // 固定节日查找
        if (consData[key][subkey]) {

            var cValue = consData[key][subkey];
            cValue = valueFilter(cValue, y);

        }

        // 非固定节日查找
        if (cacheData[y][key][subkey]) {

            var dValue = cacheData[y][key][subkey];
            dValue = valueFilter(dValue, y);

        }
        
        // 合并结果
        if (cValue && dValue) {

            if (typeof cValue === 'string') {

                cValue = cValue.split();

            }

            if (typeof dValue === 'string') {

                dValue = dValue.split();

            }

            value = cValue.concat(dValue);

        } else {

            value = cValue ? cValue : dValue;

        }

        if (!value) {

            value = '';
        
        }

        return value;
    },

    /**
     * 添加数据
     * @param target {Number} 位置
     * @param key {Number} 键
     * @param value {Number} 值
     */
    set: function(target, key, value) {

        if (target.key) {

            if (target.key instanceof Array) {

                target.key.push(value);

            } else {
                
                target.key = (target.key + '$' + value).split('$');

            }

        } else {

            target.key = value;

        }

    },
    /**
     * 特殊节日处理
     */
    specialCasesHandler: function(year) {

        //  世界防治麻风病日 1月最后一个星期日 1953 (暂不添加)
        //  国际罕见病日 2月最后一天 2008
        var k = 'd0228';

        if (this.isLeapYear) {
            k = 'd0229';
        }
        
        this.cache[year]['l2'] = {};
        this.cache[year]['l2'][k] = '国际罕见病日|2008';

    },

    /**
     * 动态数据处理
     */
    dynamicDataHandler: function(year) {

        var maxDaysTable = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        var dData = this.dynamicData;

        for (item in dData) {

            if (dData.hasOwnProperty(item)) {

                var subData = dData[item];

                var dateObj = new Date(year, 0);

                for (var i = 0, len = subData.length; i < len; i++) {
                    
                    var str = subData[i]; // 格式: 0512-世界哮喘日-2000

                    var arr = str.split('-');

                    var t = arr[0];

                    var m = +(t.substr(0, 2)); // 月份

                    var weekIndex = +(t.substr(2, 1)); // 第几个

                    var week = +(t.substr(3, 1)); // 星期几

                    var name = arr[1]; // 节日名称

                    var sY = arr[2] ? arr[2] : '';  // 起始年份

                    var maxDay = maxDaysTable[m - 1];

                    if (this.isLeapYear(year) && m === 2) {
                        maxDay = 28;
                    }

                    dateObj.setMonth(m-1);

                    var index = 0;

                    for (var j = 1; j <= maxDay; j++) {
                        
                        dateObj.setDate(j);

                        if (dateObj.getDay() === week) {
                            
                            index++;

                            if (index === weekIndex) {

                                var thisKey = 'd' + this.modifier(m) + this.modifier(dateObj.getDate());
                                var thisValue = name + sY;
                                
                                if (!this.cache[year][item]) {
                                    this.cache[year][item] = {};
                                }

                                this.cache[year][item][thisKey] = thisValue;

                                break;
                                
                            }

                        }

                    }

                }

            }

        }

        console.log('----------fn dynamicDataHandler cache-----------');
        console.log(this.cache);
    }
} 