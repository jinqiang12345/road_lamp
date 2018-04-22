package com.jin.road.Dao;

public class FixLamp {
    private int id;
    private String lampid;
    private String addr;
    private String psname;
    private String state;
    private String errortime;
    private String fixcode;
    private String fixname;
    private String reason;

    public int getId() {
        return id;
    }

    public String getLampid() {
        return lampid;
    }

    public void setLampid(String lampid) {
        this.lampid = lampid;
    }

    public String getAddr() {
        return addr;
    }

    public void setAddr(String addr) {
        this.addr = addr;
    }

    public String getPsname() {
        return psname;
    }

    public void setPsname(String psname) {
        this.psname = psname;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getErrortime() {
        return errortime;
    }

    public void setErrortime(String errortime) {
        this.errortime = errortime;
    }

    public String getFixcode() {
        return fixcode;
    }

    public void setFixcode(String fixcode) {
        this.fixcode = fixcode;
    }

    public String getFixname() {
        return fixname;
    }

    public void setFixname(String fixname) {
        this.fixname = fixname;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }
}
