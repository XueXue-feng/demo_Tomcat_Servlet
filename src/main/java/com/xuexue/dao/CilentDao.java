package com.xuexue.dao;

import com.sample.RollClients;
import com.xuexue.util.JdbcUtils;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;

/**
 * @ProjectName: demo_Tomcat_Servlet
 * @Package: com.xuexue.dao
 * @ClassName: CilentDao
 * @Author: XueXue-Li
 * @Description:
 * @Date: 2021/7/11 11:31
 * @Version: 1.0
 */
public class CilentDao {
    private JdbcTemplate template = new JdbcTemplate(JdbcUtils.getDataSource());

    public List<com.sample.RollClients> queryForClient() {
        String sql = "select * from roll_clients";
        List<RollClients> query = template.query(sql, new BeanPropertyRowMapper<RollClients>(RollClients.class));
        return query;
    }
}
