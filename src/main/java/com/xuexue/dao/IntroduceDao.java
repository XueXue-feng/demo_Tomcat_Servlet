package com.xuexue.dao;

import com.sample.RollCompanyintroduce;
import com.xuexue.util.JdbcUtils;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

/**
 * @ProjectName: demo_Tomcat_Servlet
 * @Package: com.xuexue.dao
 * @ClassName: IntroduceDao
 * @Author: XueXue-Li
 * @Description:
 * @Date: 2021/7/11 10:28
 * @Version: 1.0
 */
public class IntroduceDao {
    private JdbcTemplate template = new JdbcTemplate(JdbcUtils.getDataSource());

    public com.sample.RollCompanyintroduce queryForIntroduce() {
        String sql = "select * from roll_companyintroduce";
        RollCompanyintroduce query = template.queryForObject(sql, new BeanPropertyRowMapper<RollCompanyintroduce
                >(RollCompanyintroduce.class));
        return query;
    }
}
