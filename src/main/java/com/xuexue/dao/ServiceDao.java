package com.xuexue.dao;

import com.sample.RollCompanyService;
import com.xuexue.util.JdbcUtils;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;

/**
 * @ProjectName: demo_Tomcat_Servlet
 * @Package: com.xuexue.dao
 * @ClassName: ServiceDao
 * @Author: XueXue-Li
 * @Description:
 * @Date: 2021/7/11 10:46
 * @Version: 1.0
 */
public class ServiceDao {
    private JdbcTemplate template = new JdbcTemplate(JdbcUtils.getDataSource());

    public List<com.sample.RollCompanyService> queryForService() {
        String sql = "select * from roll_company_service";
        List<RollCompanyService> query = template.query(sql, new BeanPropertyRowMapper<RollCompanyService>(RollCompanyService.class));
        return query;
    }
}
