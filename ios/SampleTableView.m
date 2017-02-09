//
//  SampleTableView.m
//  SampleProject
//
//  Created by Cat Jia on 9/2/2017.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "SampleTableView.h"
#import "RCTViewManager.h"

@interface SampleTableViewCell : UITableViewCell
@property (nonatomic, copy) NSString *title;
@end

@interface SampleTableView () <UITableViewDataSource, UITableViewDelegate>

@property (nonatomic, copy) NSArray<NSString *> *stringArray;

@end

@implementation SampleTableView

- (instancetype)initWithFrame:(CGRect)frame
{
    self = [super initWithFrame:frame];
    if (self) {
        [self registerClass:[SampleTableViewCell class] forCellReuseIdentifier:@"SampleTableViewCell"];
        self.rowHeight = UITableViewAutomaticDimension;
        self.estimatedRowHeight = 60;
        self.dataSource = self;
        self.delegate = self;
        
        UIView *header = [[UIView alloc] initWithFrame:CGRectMake(0, 0, frame.size.width, 20)];
        header.autoresizingMask = UIViewAutoresizingFlexibleWidth;
        self.tableHeaderView = header;
    }
    return self;
}

- (void)setStringArray:(NSArray *)stringArray
{
    _stringArray = stringArray;
    [self reloadData];
}

- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section
{
    return self.stringArray.count;
}

- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath
{
    SampleTableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:@"SampleTableViewCell" forIndexPath:indexPath];
    NSString *title = self.stringArray[indexPath.row];
    if ([title isKindOfClass:[NSString class]]) {
        cell.title = title;
    } else {
        cell.title = nil;
    }
    return cell;
}

- (void)tableView:(UITableView *)tableView didSelectRowAtIndexPath:(NSIndexPath *)indexPath
{
    [tableView deselectRowAtIndexPath:indexPath animated:YES];
}

@end


@interface SampleTableViewCell ()
@property (nonatomic, strong) UILabel *label;
@end
@implementation SampleTableViewCell
- (instancetype)initWithStyle:(UITableViewCellStyle)style reuseIdentifier:(NSString *)reuseIdentifier
{
    self = [super initWithStyle:style reuseIdentifier:reuseIdentifier];
    if (self) {
        self.label = [[UILabel alloc] init];
        self.label.numberOfLines = 0;
        [self.contentView addSubview:self.label];
        self.label.translatesAutoresizingMaskIntoConstraints = NO;
        [self.label.leftAnchor constraintEqualToAnchor:self.contentView.leftAnchor constant:15].active = YES;
        [self.label.rightAnchor constraintEqualToAnchor:self.contentView.rightAnchor constant:-15].active = YES;
        [self.label.topAnchor constraintEqualToAnchor:self.contentView.topAnchor constant:10].active = YES;
        [self.label.bottomAnchor constraintEqualToAnchor:self.contentView.bottomAnchor constant:-10].active = YES;
    }
    return self;
}
- (void)setTitle:(NSString *)title
{
    _title = title;
    self.label.text = title;
}
@end




@interface RCTTableViewManager : RCTViewManager
@end

@implementation RCTTableViewManager

RCT_EXPORT_MODULE()
RCT_EXPORT_VIEW_PROPERTY(stringArray, NSArray)

- (UIView *)view
{
    return [[SampleTableView alloc] init];
}

@end
