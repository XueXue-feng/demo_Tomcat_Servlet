package com.xuexue.service;

import com.xuexue.dao.CilentDao;

import java.util.List;

/**
 * @ProjectName: demo_Tomcat_Servlet
 * @Package: com.xuexue.service
 * @ClassName: CilentService
 * @Author: XueXue-Li
 * @Description:
 * @Date: 2021/7/11 11:29
 * @Version: 1.0
 */
public class CilentService {
    private CilentDao dao = new CilentDao();
    public List<com.sample.RollClients> queryForClient() {
        return dao.queryForClient();
    }
}
