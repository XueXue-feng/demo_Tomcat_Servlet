package com.xuexue.service;

import com.xuexue.dao.ServiceDao;

import java.util.List;

/**
 * @ProjectName: demo_Tomcat_Servlet
 * @Package: com.xuexue.service
 * @ClassName: Service
 * @Author: XueXue-Li
 * @Description:
 * @Date: 2021/7/11 10:44
 * @Version: 1.0
 */
public class Service {
    private ServiceDao dao = new ServiceDao();
    public List<com.sample.RollCompanyService> queryForService() {
        return dao.queryForService();
    }
}
