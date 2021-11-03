package co.usa.reto3.reto3.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.io.Serializable;
import java.util.List;
import javax.persistence.*;

@Entity
@Table(name="farm")
public class Farm implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;
    private String  address;
    private Integer extension;
    private String description;

    @ManyToOne
    @JoinColumn(name="categoryId")
    @JsonIgnoreProperties("farms")
    private Category category;

    @OneToMany(cascade = {CascadeType.PERSIST},mappedBy = "farm")
    @JsonIgnoreProperties({"farm","client"})
    public List<Message> messages;

    @OneToMany(cascade = {CascadeType.PERSIST},mappedBy = "farm")
    @JsonIgnoreProperties({"farm","message"})
    public List<Reservation> reservations;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Integer getExtension() {
        return extension;
    }

    public void setExtension(Integer extension) {
        this.extension = extension;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public List<Message> getMessages() {
        return messages;
    }

    public void setMessages(List<Message> messages) {
        this.messages = messages;
    }

    public List<Reservation> getReservations() {
        return reservations;
    }

    public void setReservations(List<Reservation> reservations) {
        this.reservations = reservations;
    }
}


