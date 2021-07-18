package com.xuexue.service;

import com.xuexue.dao.MemberDao;
import com.xuexue.util.JdbcUtils;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;

/**
 * @ProjectName: demo_Tomcat_Servlet
 * @Package: com.xuexue.service
 * @ClassName: MemberService
 * @Author: XueXue-Li
 * @Description:
 * @Date: 2021/7/11 11:12
 * @Version: 1.0
 */
public class MemberService {
    private MemberDao dao = new MemberDao();
    public List<com.sample.RollCompanymembers> queryForMembers() {
        return dao.queryForMembers();
    }
}
