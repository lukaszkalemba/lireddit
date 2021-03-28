import { MigrationInterface, QueryRunner } from 'typeorm';

export class FakePosts1616862564386 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
    insert into post (title , text, "creatorId", "createdAt") values ('Finding Forrester', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

    Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.
    
    Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 1, '2020-12-15T14:04:51Z');
    insert into post (title , text, "creatorId", "createdAt") values ('Ride', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.
    
    Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 1, '2020-11-03T15:10:11Z');
    insert into post (title , text, "creatorId", "createdAt") values ('Hum Dil De Chuke Sanam', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.
    
    Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 1, '2020-07-11T21:45:11Z');
    insert into post (title , text, "creatorId", "createdAt") values ('10 minutes (10 minuta)', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.
    
    Sed ante. Vivamus tortor. Duis mattis egestas metus.
    
    Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 1, '2021-03-20T10:58:39Z');
    insert into post (title , text, "creatorId", "createdAt") values ('Heroes for Sale', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 1, '2021-03-03T10:23:14Z');
    insert into post (title , text, "creatorId", "createdAt") values ('Deal of the Century', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 1, '2021-03-02T11:09:38Z');
    insert into post (title , text, "creatorId", "createdAt") values ('Notorious Bettie Page, The', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.', 1, '2020-08-11T18:26:23Z');
    insert into post (title , text, "creatorId", "createdAt") values ('Peter Pan', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.
    
    Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.
    
    Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 1, '2021-02-10T19:02:08Z');
    insert into post (title , text, "creatorId", "createdAt") values ('Crimi Clowns: De Movie', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.
    
    Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.
    
    Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 1, '2020-05-24T18:23:33Z');
    insert into post (title , text, "creatorId", "createdAt") values ('Agnes of God', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.
    
    Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', 1, '2020-10-06T12:08:36Z');
    insert into post (title , text, "creatorId", "createdAt") values ('First Love (Primo Amore)', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.
    
    Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 1, '2020-08-26T23:55:25Z');
    insert into post (title , text, "creatorId", "createdAt") values ('Lost and Delirious', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 1, '2020-08-23T11:17:21Z');
    insert into post (title , text, "creatorId", "createdAt") values ('Moulin Rouge', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.
    
    Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.
    
    Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 1, '2020-06-13T13:48:27Z');
    insert into post (title , text, "creatorId", "createdAt") values ('Extracted', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.
    
    Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 1, '2020-06-08T20:10:36Z');
    insert into post (title , text, "creatorId", "createdAt") values ('Black Butterflies', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', 1, '2020-10-12T11:23:47Z');
    insert into post (title , text, "creatorId", "createdAt") values ('Roxanne', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 1, '2020-09-07T20:23:37Z');
    insert into post (title , text, "creatorId", "createdAt") values ('Unmade Beds', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 1, '2020-12-20T15:42:36Z');
    insert into post (title , text, "creatorId", "createdAt") values ('Didier', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.
    
    Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 1, '2020-04-28T15:05:50Z');
    insert into post (title , text, "creatorId", "createdAt") values ('Formosa Betrayed', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.
    
    Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.
    
    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 1, '2020-07-21T03:20:47Z');
    insert into post (title , text, "creatorId", "createdAt") values ('Uninvited, The', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.
    
    Fusce consequat. Nulla nisl. Nunc nisl.
    
    Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 1, '2021-03-24T21:01:30Z');
    insert into post (title , text, "creatorId", "createdAt") values ('Robin Hood: Prince of Thieves', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 1, '2020-06-24T17:19:29Z');
    insert into post (title , text, "creatorId", "createdAt") values ('Mr. Untouchable', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.
    
    Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 1, '2020-05-19T11:16:24Z');
    insert into post (title , text, "creatorId", "createdAt") values ('Couples Retreat', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.
    
    Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.
    
    Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 1, '2021-01-21T00:35:32Z');
    insert into post (title , text, "creatorId", "createdAt") values ('Beyond All Boundaries', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.
    
    Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 1, '2020-06-28T00:33:16Z');
    insert into post (title , text, "creatorId", "createdAt") values ('Dead Men Walk', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    
    Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.
    
    Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 1, '2020-10-05T08:01:29Z');
    insert into post (title , text, "creatorId", "createdAt") values ('Amazon Women on the Moon', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 1, '2020-04-15T03:12:35Z');
    insert into post (title , text, "creatorId", "createdAt") values ('Bengazi', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 1, '2020-04-20T11:49:25Z');
    insert into post (title , text, "creatorId", "createdAt") values ('Ulee''s Gold', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.
    
    Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.
    
    Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 1, '2020-04-03T03:56:00Z');
    insert into post (title , text, "creatorId", "createdAt") values ('Up Periscope', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.
    
    Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 1, '2020-04-22T20:40:56Z');
    insert into post (title , text, "creatorId", "createdAt") values ('Marketa Lazarová', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 1, '2021-02-06T02:57:25Z');
    insert into post (title , text, "creatorId", "createdAt") values ('Eye of the Storm, The', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 1, '2021-01-27T19:57:14Z');
    insert into post (title , text, "creatorId", "createdAt") values ('Hostel: Part II', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.
    
    In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 1, '2020-05-31T15:59:09Z');
    insert into post (title , text, "creatorId", "createdAt") values ('Just One of the Guys', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 1, '2020-07-05T08:52:19Z');
    insert into post (title , text, "creatorId", "createdAt") values ('Chinese Ghost Story, A (Sinnui yauwan)', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.
    
    Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 1, '2020-11-28T06:14:53Z');
    insert into post (title , text, "creatorId", "createdAt") values ('Tooth Fairy 2', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.
    
    In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 1, '2020-03-29T03:47:19Z');
    insert into post (title , text, "creatorId", "createdAt") values ('Penn & Teller Get Killed', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.
    
    Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 1, '2020-06-05T08:35:14Z');
    insert into post (title , text, "creatorId", "createdAt") values ('Mystery of Picasso, The (Le mystère Picasso)', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 1, '2020-10-26T23:48:27Z');
    insert into post (title , text, "creatorId", "createdAt") values ('Jersey Girl', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 1, '2020-12-28T13:14:21Z');
    insert into post (title , text, "creatorId", "createdAt") values ('Baarìa', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 1, '2021-03-02T17:51:59Z');
    insert into post (title , text, "creatorId", "createdAt") values ('Them (Ils)', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.
    
    In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 1, '2021-03-13T00:02:38Z');
    insert into post (title , text, "creatorId", "createdAt") values ('Pact, The', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.
    
    Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 1, '2020-05-03T05:40:42Z');
    insert into post (title , text, "creatorId", "createdAt") values ('Cold Water (Eau Froide, L'')', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.
    
    In congue. Etiam justo. Etiam pretium iaculis justo.', 1, '2020-07-15T17:32:07Z');
    insert into post (title , text, "creatorId", "createdAt") values ('Captain Video: Master of the Stratosphere', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.
    
    Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.
    
    Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 1, '2020-11-09T02:39:32Z');
    insert into post (title , text, "creatorId", "createdAt") values ('Zidane: A 21st Century Portrait (Zidane, un portrait du 21e siècle)', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.
    
    Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 1, '2020-09-10T13:51:47Z');
    insert into post (title , text, "creatorId", "createdAt") values ('Howling IV: The Original Nightmare', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 1, '2020-10-08T07:53:22Z');
    insert into post (title , text, "creatorId", "createdAt") values ('Albino Alligator', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 1, '2020-06-08T10:21:15Z');
    insert into post (title , text, "creatorId", "createdAt") values ('Table 7', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 1, '2020-12-10T18:02:30Z');
    insert into post (title , text, "creatorId", "createdAt") values ('Godzilla vs. Biollante (Gojira vs. Biorante) ', 'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 1, '2020-12-11T04:10:01Z');
    insert into post (title , text, "creatorId", "createdAt") values ('Leaning Tower, The (Kalteva torni)', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.
    
    Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 1, '2021-01-29T16:47:39Z');
    insert into post (title , text, "creatorId", "createdAt") values ('Tarzan''s New York Adventure', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.
    
    In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.
    
    Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 1, '2020-09-27T00:34:29Z');
    `);
  }

  public async down(): Promise<void> {}
}
