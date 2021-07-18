package com.xuexue.service;

import com.xuexue.dao.loadAllDataDao;
import com.xuexue.domain.RollShowAll;

import java.util.List;

/**
 * @ProjectName: demo_Tomcat_Servlet
 * @Package: com.xuexue.service
 * @ClassName: loadAllDataService
 * @Author: XueXue-Li
 * @Description:
 * @Date: 2021/7/10 18:09
 * @Version: 1.0
 */
public class loadAllDataService {
    private loadAllDataDao dao = new loadAllDataDao();


    public List<RollShowAll> load() {
        return dao.queryAll();
    }

    public com.sample.RollShowone queryForOne(String tag_discribe){
        return dao.queryForOne(tag_discribe);
    }
}
