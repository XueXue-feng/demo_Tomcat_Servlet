package com.xuexue.dao;

import com.sample.RollCompanymembers;
import com.xuexue.util.JdbcUtils;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;

/**
 * @ProjectName: demo_Tomcat_Servlet
 * @Package: com.xuexue.dao
 * @ClassName: MemberDao
 * @Author: XueXue-Li
 * @Description:
 * @Date: 2021/7/11 11:15
 * @Version: 1.0
 */
public class MemberDao {
    private JdbcTemplate template = new JdbcTemplate(JdbcUtils.getDataSource());

    public List<com.sample.RollCompanymembers> queryForMembers() {
        String sql = "select * from roll_companymembers";
        List<RollCompanymembers> query = template.query(sql, new BeanPropertyRowMapper<RollCompanymembers>(RollCompanymembers.class));
        return query;
    }
}
