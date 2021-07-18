package com.xuexue.service;

import com.xuexue.dao.IntroduceDao;

/**
 * @ProjectName: demo_Tomcat_Servlet
 * @Package: com.xuexue.service
 * @ClassName: introduceService
 * @Author: XueXue-Li
 * @Description:
 * @Date: 2021/7/11 10:16
 * @Version: 1.0
 */
public class introduceService {
    private IntroduceDao dao = new IntroduceDao();
    public com.sample.RollCompanyintroduce queryForIntroduce() {
        return dao.queryForIntroduce();
    }
}
